import client from './client';

export const getStreaks = () => client.get('/streak');
export const updateStreak = (data) => client.post('/streak', data);
