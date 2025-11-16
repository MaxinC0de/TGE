import { useSetScreen, useUpgrades, useCount } from "@store"
import { useState, useEffect } from "react"

export default function Dot({ direction }) {
  const [isOneBuyable, setIsOneBuyable] = useState(false)
  const setScreen = useSetScreen()
  const count = useCount()
  const upgrades = useUpgrades()
  useEffect(() => {
    const oneBuyable = upgrades.some((u) => count >= u.cost)
    setIsOneBuyable(oneBuyable)
  }, [count, upgrades])
  return (
    <button
      onClick={() => setScreen(direction)}
      className={`absolute z-10 top-3 right-3 cursor-pointer size-6 rounded-full 
          ${isOneBuyable ? "shaking-dot bg-white" : "bg-black border border-white"}`}
    ></button>
  )
}
