import { useState, useEffect } from 'react';
import { getBlocks } from '../api/timeblocks.api';
import { getToday } from '../utils/dateUtils';

export const useActiveBlock = () => {
  const [activeBlock, setActiveBlock] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkActiveBlock = async () => {
    try {
      setLoading(true);
      const { data: blocks } = await getBlocks(getToday());
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const active = blocks.find(
        (b) => b.startTime <= currentTime && b.endTime > currentTime && !b.completed
      );

      setActiveBlock(active || null);
    } catch (err) {
      console.error('Failed to check active block:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkActiveBlock();
    const interval = setInterval(checkActiveBlock, 60000); // check every minute
    return () => clearInterval(interval);
  }, []);

  return { activeBlock, loading, refetch: checkActiveBlock };
};
