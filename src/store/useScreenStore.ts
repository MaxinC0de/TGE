import { create } from "zustand"

export const useScreenStore = create((set) => ({
  screen: "main",
  setScreen: (screen) => set({ screen })
}))

export const useScreen = () => useScreenStore((s) => s.screen)
export const useSetScreen = () => useScreenStore((s) => s.setScreen)
