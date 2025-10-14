import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set({ count: 0 }),
  add: (n) => set((state) => ({ count: state.count + n })),
  darkTheme: false,
  toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
}));
