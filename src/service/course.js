import { api } from '@/service/api';

const BASE_URL = '/course';
export const createCourse = async (formData) =>
  api.post(`${BASE_URL}`, formData, {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    },
  });

export const getAllCourses = async () => api.get(`${BASE_URL}`);

export const getCourseById = async (courseId) => api.get(`${BASE_URL}/${courseId}`);

export const removeCourse = async (courseId) => api.delete(`${BASE_URL}/${courseId}`);