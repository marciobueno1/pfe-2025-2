import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      count: 1,
      inc: () => set((state) => ({ count: state.count + 1 })),
      clear: () => set({ count: 0 }),
      add: (n) => set((state) => ({ count: state.count + n })),
      darkTheme: false,
      toggleTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
    }),
    {
      name: "pfe20252-counter-storage", // unique name
    }
  )
);
