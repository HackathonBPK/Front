import { api } from '@/service/api';

const BASE_URL = '/module';
export const createModule = async (formData) =>
  api.post(`${BASE_URL}`, formData, {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    },
  });

export const getAllModules = async () => api.get(`${BASE_URL}`);
export const getModulesByCourse = async (courseid) =>
  api.get(`${BASE_URL}/course/${courseid}`);

export const getModuleById = async (moduleId) =>
  api.get(`${BASE_URL}/${moduleId}`);

export const removeModule = async (moduleId) =>
  api.delete(`${BASE_URL}/${moduleId}`);
