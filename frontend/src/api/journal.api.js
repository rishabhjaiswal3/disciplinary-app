import client from './client';

export const getEntries = (date) => client.get(`/journal?date=${date}`);
export const createEntry = (data) => client.post('/journal', data);
export const updateEntry = (id, data) => client.put(`/journal/${id}`, data);
export const deleteEntry = (id) => client.delete(`/journal/${id}`);
