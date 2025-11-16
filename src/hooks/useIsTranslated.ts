import { useState, useEffect } from "react"
import { useUpgrades } from "@store"

export const useIsTranslated = () => {
  const [isTranslated, setIsTranslate] = useState(false)
  const upgrades = useUpgrades()
  useEffect(() => {
    const translationUpgrade = upgrades.find((u) => u.key === "translation")
    setIsTranslate(translationUpgrade.isBought)
  }, [upgrades])
  return isTranslated
}
