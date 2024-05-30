# backend/app/database.py
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

# Load environment variables from a .env file
load_dotenv()

# Get the MongoDB connection URL from the environment variables
DATABASE_URL = os.getenv("DATABASE_URL")

# Create a new MongoDB client and connect to the specified database
client = AsyncIOMotorClient(DATABASE_URL)
database = client.get_database("library_db")

# Helper function to serialize MongoDB documents
def serialize_doc(doc):
    """
    Convert a MongoDB document to a dictionary and replace the _id field with id.
    """
    doc["id"] = str(doc["_id"])
    del doc["_id"]
    return doc