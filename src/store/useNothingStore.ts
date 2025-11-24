import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export const useNothingStore = create()(
  immer((set) => ({
    count: 5,
    cap: 1,
    incrementCap: () =>
      set((s) => {
        if (s.cap > s.count) return
        s.count = 0
        s.cap += 1
      }),
    incrementCount: (qty = 1) =>
      set((s) => {
        if (s.count + qty > s.cap) {
          s.count = s.cap
        } else {
          s.count += qty
        }
      }),
    multiplier: 1,
    incrementMultiplier: (qty = 1) =>
      set((s) => {
        if (s.count < 10) return
        s.multiplier += qty
      }),
    decrementCount: (qty = 1) =>
      set((s) => {
        s.count -= Math.max(0, s.count - qty)
      }),
    reset: () =>
      set((s) => {
        s.count = 0
      }),
    sprites: 1,
    incrementSprites: () =>
      set((s) => {
        s.sprites += 1
      }),
    autobuyers: 1,
    incrementAutobuyers: () =>
      set((s) => {
        if (s.count < 5) return
        s.count -= 5
        s.autobuyers += 1
      })
  }))
)

export const useCount = () => useNothingStore((s) => s.count)
export const useCap = () => useNothingStore((s) => s.cap)
export const useIncrementCap = () => useNothingStore((s) => s.incrementCap)
export const useIncrementCount = () => useNothingStore((s) => s.incrementCount)
export const useDecrementCount = () => useNothingStore((s) => s.decrementCount)
export const useMultiplier = () => useNothingStore((s) => s.multiplier)
export const useIncrementMultiplier = () =>
  useNothingStore((s) => s.incrementMultiplier)
export const useAutobuyers = () => useNothingStore((s) => s.autobuyers)
export const useIncrementAutobuyers = () =>
  useNothingStore((s) => s.incrementAutobuyers)
export const useReset = () => useNothingStore((s) => s.reset)
export const useSprites = () => useNothingStore((s) => s.sprites)
export const useIncrementSprites = () =>
  useNothingStore((s) => s.incrementSprites)
