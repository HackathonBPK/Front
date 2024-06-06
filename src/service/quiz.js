import { api } from '@/service/api';

const BASE_URL = '/quiz';

export const getAll = async () => {
  const response = await api.get(`${BASE_URL}`);
  return response.data;
};

export const getOne = async (quizId) => {
  const response = await api.get(`${BASE_URL}/${quizId}`);
  return response.data;
};

export const create = async (quiz) => {
  const response = await api.post(`${BASE_URL}`, {quiz});
  return response.data;
};

export const update = async (quizId, quiz) => {
  const response = await api.put(`${BASE_URL}/${quizId}`, quiz);
  return response.data;
};

export const deleteOne = async (quizId) => {
  const response = await api.delete(`${BASE_URL}/${quizId}`);
  return response.data;
};
