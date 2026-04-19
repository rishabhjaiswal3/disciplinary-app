import client from './client';

export const getScore = (date) => client.get(`/score?date=${date}`);
export const updateScore = (data) => client.post('/score', data);
