import { create } from 'zustand';

export const useUrgeStore = create((set) => ({
  urges: [],
  setUrges: (urges) => set({ urges }),
  addUrge: (urge) => set((state) => ({ urges: [...state.urges, urge] })),
}));
