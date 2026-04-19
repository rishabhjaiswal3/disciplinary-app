import client from './client';

export const getWeeklyReport = (startDate, endDate) =>
  client.get(`/analytics/weekly?startDate=${startDate}&endDate=${endDate}`);

export const getTrends = (days = 30) =>
  client.get(`/analytics/trends?days=${days}`);
