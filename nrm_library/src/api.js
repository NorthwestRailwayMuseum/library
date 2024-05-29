// src/services/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Your backend URL

export const getBooks = async () => {
  const response = await axios.get(`${API_URL}/books/`);
  return response.data;
};

export const createBook = async (book) => {
  const response = await axios.post(`${API_URL}/books/`, book);
  return response.data;
};