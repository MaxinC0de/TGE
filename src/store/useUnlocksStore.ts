import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export const useUnlocksStore = create()(
  immer((set) => ({
    unlocks: {
      incrementNothing: false,
      dot: false,
      autobuyer: false,
      multiplier: false
    },
    setIsUnlocked: (name) =>
      set((s) => {
        s.unlocks[name] = true
      })
  }))
)

export const useUnlocks = () => useUnlocksStore((s) => s.unlocks)
export const useSetIsUnlocked = () => useUnlocksStore((s) => s.setIsUnlocked)
