import { useEffect, useState } from "react"
import { useCount, useUpgrades } from "@store"

export const useIsBuyable = (cost) => {
  const [isBuyable, setIsBuyable] = useState(false)
  const count = useCount()
  useEffect(() => {
    if (count >= cost) setIsBuyable(true)
  }, [count])
  return isBuyable
}
