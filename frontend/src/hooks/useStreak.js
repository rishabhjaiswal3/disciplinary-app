import { useState, useEffect } from 'react';
import { getStreaks } from '../api/streak.api';

export const useStreak = () => {
  const [streaks, setStreaks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStreaks = async () => {
    try {
      setLoading(true);
      const { data } = await getStreaks();
      setStreaks(data);
    } catch (err) {
      console.error('Failed to fetch streaks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStreaks();
  }, []);

  return { streaks, loading, refetch: fetchStreaks };
};
