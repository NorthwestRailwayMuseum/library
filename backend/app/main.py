# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import crud, schemas

app = FastAPI()

origins = [
    "http://localhost:3000",  # React development server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/books/", response_model=list[schemas.Book])
async def read_books(skip: int = 0, limit: int = 10):
    books = await crud.get_books(skip=skip, limit=limit)
    return books

@app.post("/books/", response_model=schemas.Book)
async def create_book(book: schemas.BookCreate):
    return await crud.create_book(book)

@app.get("/test-db/")
async def test_db():
    try:
        collections = await database.list_collection_names()
        return {"status": "success", "collections": collections}
    except Exception as e:
        logging.error(f"Database connection failed: {e}")
        return {"status": "error", "message": str(e)}