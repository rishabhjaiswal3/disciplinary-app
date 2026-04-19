import { useState, useEffect } from 'react';
import { getScore } from '../api/score.api';
import { getToday } from '../utils/dateUtils';

export const useDailyScore = () => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchScore = async (date) => {
    try {
      setLoading(true);
      const { data } = await getScore(date || getToday());
      setScore(data);
    } catch (err) {
      console.error('Failed to fetch score:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScore();
  }, []);

  return { score, loading, refetch: fetchScore };
};
