import client from './client';

export const getUrges = (date) => client.get(`/urge?date=${date}`);
export const logUrge = (data) => client.post('/urge', data);
