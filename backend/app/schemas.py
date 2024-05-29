# backend/app/schemas.py
from pydantic import BaseModel, Field
from typing import Optional

class BookBase(BaseModel):
    title: str
    author: str
    year: str

class BookCreate(BookBase):
    pass

class Book(BookBase):
    id: str = Field(default_factory=str)