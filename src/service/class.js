import { api } from '@/service/api';

const BASE_URL = '/class';
export const createClass = async (formData) =>
  api.post(`${BASE_URL}`, formData, {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    },
  });

export const getAllClasss = async () => api.get(`${BASE_URL}`);

export const getClassById = async (classId) =>
  api.get(`${BASE_URL}/${classId}`);

export const getClassByModule = async (moduleid) =>
  api.get(`${BASE_URL}/module/${moduleid}`);

export const removeClass = async (classId) =>
  api.delete(`${BASE_URL}/${classId}`);
