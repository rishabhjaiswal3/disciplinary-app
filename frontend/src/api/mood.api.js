import client from './client';

export const getMood = (date) => client.get(`/mood?date=${date}`);
export const logMood = (data) => client.post('/mood', data);
