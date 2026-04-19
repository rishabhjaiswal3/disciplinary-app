import { create } from 'zustand';

export const useHabitStore = create((set) => ({
  habits: [],
  setHabits: (habits) => set({ habits }),
  toggleHabit: (habitKey) =>
    set((state) => ({
      habits: state.habits.map((h) =>
        h.habitKey === habitKey ? { ...h, completed: !h.completed } : h
      ),
    })),
}));
