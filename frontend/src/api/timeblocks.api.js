import client from './client';

export const getBlocks = (date) => client.get(`/timeblocks?date=${date}`);
export const createBlock = (data) => client.post('/timeblocks', data);
export const updateBlock = (id, data) => client.put(`/timeblocks/${id}`, data);
export const deleteBlock = (id) => client.delete(`/timeblocks/${id}`);
