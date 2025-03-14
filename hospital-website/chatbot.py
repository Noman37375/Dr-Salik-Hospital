import os
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from dotenv import load_dotenv
import openai
from pinecone import Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Pinecone as LangchainPinecone
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferWindowMemory
from langchain.prompts import PromptTemplate

# Load environment variables
load_dotenv()

# Set OpenAI API key in environment
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

# Initialize FastAPI app
app = FastAPI()

# Configure CORS - Update to allow specific origins in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this with your frontend URL in production
    allow_origins=["https://drsalikhospital.com/"],  # Update this with your frontend URL in production
    allow_origins=["https://dr-salik-hospital.vercel.app/"],  # Update this with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

# Initialize OpenAI
openai.api_key = os.getenv("OPENAI_API_KEY")

# Initialize Pinecone client
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

# Initialize embeddings
embeddings = OpenAIEmbeddings(
    model="text-embedding-ada-002",
    openai_api_key=os.getenv("OPENAI_API_KEY")
)

# Get the index
index_name = "n8n"
index = pc.Index(index_name)

# Define the system message template
template = """You are an AI-powered HR assistant for Dr. Salik Hospital, located in Karachi, Pakistan. Your role is to assist hospital staff, patients, and administrators by providing accurate information about consultant schedules, managing appointments, answering HR-related queries, and facilitating communication.

Use the following guidelines:
1. Provide accurate information about doctor schedules, specialties, and fees
2. Help with appointment scheduling and availability
3. Answer questions about hospital services and facilities
4. Maintain a professional and empathetic tone
5. If unsure about any information, acknowledge limitations and suggest contacting the hospital directly

Remember:
- Do not provide medical advice
- Be clear about appointment requirements
- Verify information before confirming details
- Use the context provided to give accurate responses

Relevant information from database: {context}

Previous conversation:
{chat_history}

Human: {input}
Assistant: """

# Create prompt template
prompt = PromptTemplate(
    input_variables=["context", "chat_history", "input"],
    template=template
)

# Initialize conversation chain with memory
llm = ChatOpenAI(temperature=0.7, model="gpt-3.5-turbo")
memory = ConversationBufferWindowMemory(
    k=5,
    memory_key="chat_history",
    input_key="input",  # Specify which key to use for storing history
    return_messages=True
)

# Create the chain
conversation = LLMChain(
    llm=llm,
    prompt=prompt,
    memory=memory,
    verbose=True
)

class ChatMessage(BaseModel):
    message: str

@app.get("/")
async def root():
    return {"status": "ok", "message": "Chatbot API is running"}

@app.post("/chat")
async def chat_endpoint(message: ChatMessage):
    try:
        if not message.message.strip():
            return JSONResponse(
                status_code=400,
                content={"error": "Message cannot be empty"}
            )

        # Get embeddings for the query
        query_embedding = embeddings.embed_query(message.message)
        
        # Search for relevant context in vector store
        results = index.query(
            vector=query_embedding,
            top_k=3,
            include_metadata=True
        )
        
        # Extract and combine the content from search results
        context = "\n".join([
            result.metadata.get("text", "") 
            for result in results["matches"] 
            if result.metadata and "text" in result.metadata
        ])
        
        # Get response from conversation chain using predict method
        response = conversation.predict(
            context=context,
            input=message.message
        )
        
        # Log the response for debugging
        print(f"User message: {message.message}")
        print(f"Context: {context}")
        print(f"Response: {response}")
        
        if not response:
            return JSONResponse(
                status_code=500,
                content={"error": "No response generated"}
            )
        
        return JSONResponse(
            status_code=200,
            content={"response": response.strip()}
        )
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"error": f"An error occurred: {str(e)}"}
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="info") 