import { POINTS } from '../constants/scoring';

/**
 * Calculate total score from breakdown
 */
export const calculateTotalScore = (breakdown) => {
  return Object.values(breakdown).reduce((sum, val) => sum + val, 0);
};

/**
 * Get score grade based on total points
 */
export const getGrade = (totalPoints) => {
  if (totalPoints >= 150) return { grade: 'S', label: 'Legendary' };
  if (totalPoints >= 120) return { grade: 'A', label: 'Excellent' };
  if (totalPoints >= 90) return { grade: 'B', label: 'Good' };
  if (totalPoints >= 60) return { grade: 'C', label: 'Average' };
  if (totalPoints >= 30) return { grade: 'D', label: 'Below Average' };
  return { grade: 'F', label: 'Needs Work' };
};
