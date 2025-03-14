from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import openai
from pinecone import Pinecone
import numpy as np

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://drsalikhospital.com",
        "https://dr-salik-hospital.vercel.app",
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Initialize clients
openai.api_key = os.getenv("OPENAI_API_KEY")
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
index = pc.Index("n8n")

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

        # Get embeddings
        response = openai.Embedding.create(
            input=message.message,
            model="text-embedding-ada-002"
        )
        query_embedding = response['data'][0]['embedding']

        # Search for context
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

        # Generate chat completion
        system_message = """You are an AI-powered HR assistant for Dr. Salik Hospital. 
        Provide accurate information about the hospital and its services based on the given context."""

        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": f"Context: {context}\n\nQuestion: {message.message}"}
            ],
            temperature=0.7
        )

        return JSONResponse(
            status_code=200,
            content={"response": completion.choices[0].message['content']}
        )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        ) 