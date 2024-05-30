// src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Your backend URL


export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const createBook = async (book) => {
  try {
    const response = await axios.post(`${API_URL}/books/`, book);
    return response.data;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }
};