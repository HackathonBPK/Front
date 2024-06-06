import { api } from '@/service/api';

const BASE_URL = '/client';

export const getAll = async () => {
  const response = await api.get(`${BASE_URL}`);
  return response.data;
};

export const getOne = async (clientId) => {
  const response = await api.get(`${BASE_URL}/${clientId}`);
  return response.data;
};

export const create = async (nome, email, senha, cpf) => {
  const response = await api.post(`${BASE_URL}`, {
    nome,
    email,
    senha,
    cpf,
  });
  return response.data;
};

export const update = async (clientId, client) => {
  const response = await api.put(`${BASE_URL}/${clientId}`, client);
  return response.data;
};

export const deleteOne = async (clientId) => {
  const response = await api.delete(`${BASE_URL}/${clientId}`);
  return response.data;
};
