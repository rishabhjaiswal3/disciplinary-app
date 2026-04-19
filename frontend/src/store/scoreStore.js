import { create } from 'zustand';

export const useScoreStore = create((set) => ({
  score: null,
  setScore: (score) => set({ score }),
}));
