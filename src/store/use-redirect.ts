import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  redirectSection: string;
  setRedirect: (str: string) => void;
}

export const useRedirectStore = create<Store>()(
  persist(
    (set) => ({
      redirectSection: "",
      setRedirect: (str) =>
        set((state) => ({ redirectSection: (state.redirectSection = str) })),
    }),
    {
      name: "redirect-storage",
    }
  )
);
