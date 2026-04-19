import { create } from 'zustand';

export const useStreakStore = create((set) => ({
  streaks: [],
  setStreaks: (streaks) => set({ streaks }),
}));
