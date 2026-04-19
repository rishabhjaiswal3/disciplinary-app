import client from './client';

export const getHabits = (date) => client.get(`/habits?date=${date}`);
export const toggleHabit = (data) => client.post('/habits', data);
