import axios from "axios";

axios.defaults.withCredentials = true;

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getQuestions = async () => {
  const response = await axios.get(`${BASE_URL}/questions`);
  return response.data;
};

export const storeQuestion = async (question) => {
  const response = await axios.post(`${BASE_URL}/questions`, question);
  return response.data;
};

export const deleteQuestion = async (id) => {
  const response = await axios.delete(`${BASE_URL}/questions/${id}`);
  return response.data;
};

