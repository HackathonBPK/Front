import { api } from '@/service/api';

const BASE_URL = '/progress';

export const getAll = async () => {
  const response = await api.get(`${BASE_URL}`);
  return response.data;
};

export const getOne = async (progressId) => {
  const response = await api.get(`${BASE_URL}/${progressId}`);
  return response.data;
};

export const postProgress = async (curso_id, usuario_id, progresso) => {
  const response = await api.post(`${BASE_URL}`, {
    curso_id,
    usuario_id,
    progresso,
  });
  return response.data;
};

export const getByUserId = async (usuario_id) => {
  const response = await api.get(`${BASE_URL}/usuario/${usuario_id}`);
  return response.data;
};
