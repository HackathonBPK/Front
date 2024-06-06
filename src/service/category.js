import { api } from '@/service/api';

const BASE_URL = '/category';

export const getCategory = async () => api.get(`${BASE_URL}`);

export const getCategoryById = async (id) => api.get(`${BASE_URL}/${id}`);