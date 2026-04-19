import client from './client';

export const getSessions = (date) => client.get(`/worksession?date=${date}`);
export const createSession = (data) => client.post('/worksession', data);
export const updateSession = (id, data) => client.put(`/worksession/${id}`, data);
