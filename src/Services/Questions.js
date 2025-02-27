import axios from "axios";
import { addVersionToUrl } from "./AddVersionToURL"; // Importa la función

axios.defaults.withCredentials = true;

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getQuestions = async () => {
  const url = addVersionToUrl(`${BASE_URL}/questions`); // Agrega el parámetro de versión
  const response = await axios.get(url);
  return response.data;
};

export const storeQuestion = async (question) => {
  const url = addVersionToUrl(`${BASE_URL}/questions`); // Agrega el parámetro de versión
  const response = await axios.post(url, question);
  return response.data;
};

export const deleteQuestion = async (id) => {
  const url = addVersionToUrl(`${BASE_URL}/questions/${id}`); // Agrega el parámetro de versión
  const response = await axios.delete(url);
  return response.data;
};