import { create } from 'zustand';

export const useBlockStore = create((set) => ({
  blocks: [],
  setBlocks: (blocks) => set({ blocks }),
  addBlock: (block) => set((state) => ({ blocks: [...state.blocks, block] })),
  removeBlock: (id) =>
    set((state) => ({ blocks: state.blocks.filter((b) => b._id !== id) })),
}));
