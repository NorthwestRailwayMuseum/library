# backend/app/crud.py
from motor.motor_asyncio import AsyncIOMotorDatabase
from .schemas import BookCreate
from .database import database, serialize_doc
from bson import ObjectId

async def get_books(skip: int = 0, limit: int = 10):
    books = []
    async for book in database.books.find().skip(skip).limit(limit):
        books.append(serialize_doc(book))
    return books

async def create_book(book: BookCreate):
    book_dict = book.dict()
    result = await database.books.insert_one(book_dict)
    new_book = await database.books.find_one({"_id": result.inserted_id})
    return serialize_doc(new_book)