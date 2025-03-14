from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import openai
from pinecone import Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.prompts import PromptTemplate

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_origins=["https://drsalikhospital.com/"],
    allow_origins=["https://dr-salik-hospital.vercel.app/"],    # Update this with your frontend URL in production # Update this with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Initialize clients
openai.api_key = os.getenv("OPENAI_API_KEY")
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
embeddings = OpenAIEmbeddings(
    model="text-embedding-ada-002",
    openai_api_key=os.getenv("OPENAI_API_KEY")
)
index = pc.Index("n8n")

# Create chat model
llm = ChatOpenAI(
    temperature=0.7,
    model="gpt-3.5-turbo",
    openai_api_key=os.getenv("OPENAI_API_KEY")
)

class ChatMessage(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(message: ChatMessage):
    try:
        if not message.message.strip():
            return JSONResponse(
                status_code=400,
                content={"error": "Message cannot be empty"}
            )

        # Get embeddings and search for context
        query_embedding = embeddings.embed_query(message.message)
        results = index.query(
            vector=query_embedding,
            top_k=3,
            include_metadata=True
        )
        
        # Extract context
        context = "\n".join([
            result.metadata.get("text", "") 
            for result in results["matches"] 
            if result.metadata and "text" in result.metadata
        ])

        # Create prompt
        prompt = PromptTemplate(
            template="""You are an AI-powered HR assistant for Dr. Salik Hospital. Provide accurate information about the hospital and its services.

Context: {context}

Answer: """
        )

        # Generate response
        response = llm(prompt.format(context=context))

        return JSONResponse(
            status_code=200,
            content={"response": response.choices[0].message.content}
        )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        ) 