import { api } from '@/service/api';

const BASE_URL = '/category';

export const getAll = async () => {
  const response = await api.get(`${BASE_URL}`);
  return response.data;
};

export const getOne = async (categoryId) => {
  const response = await api.get(`${BASE_URL}/${categoryId}`);
  return response.data;
};

export const create = async (category) => {
  const response = await api.post(`${BASE_URL}`, category);
  return response.data;
};

export const update = async (categoryId, category) => {
  const response = await api.put(`${BASE_URL}/${categoryId}`, category);
  return response.data;
};

export const deleteOne = async (categoryId) => {
  const response = await api.delete(`${BASE_URL}/${categoryId}`);
  return response.data;
};
