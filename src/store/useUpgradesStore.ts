import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export const useUpgradesStore = create()(
  // key: "gain less nnow, gain more later, en gros permet d'obtenir du nothing toutes les frames au lien d'en spawn 1"
  immer((set) => ({
    upgrades: [
      {
        key: "increase cap",
        name: "Nothing + Nothing = Nothing",
        description: "Unlock increase cap",
        cost: 1,
        isBought: false
      },
      {
        key: "organized",
        name: "Nothing is organized",
        description: "find order in chaos",
        cost: 3,
        isBought: false
      },
      {
        key: "autobuyer",
        name: "unlock autobuyer",
        description: "they work for you",
        cost: 5,
        isBought: false
      },
      {
        key: "translation",
        name: "unlock translation",
        cost: 10,
        isBought: false
      }
    ],
    setIsBought: (key) =>
      set((s) => {
        const upgrade = s.upgrades.find((u) => u.key === key)
        if (upgrade) upgrade.isBought = true
      })
  }))
)

export const useUpgrades = () => useUpgradesStore((s) => s.upgrades)
export const useSetIsBought = () => useUpgradesStore((s) => s.setIsBought)
