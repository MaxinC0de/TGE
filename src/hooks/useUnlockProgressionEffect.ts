import { useEffect } from "react"
import { useCount, useUnlocks, useSetIsUnlocked } from "@store"

export const useUnlockProgressionEffect = () => {
  const count = useCount()
  const unlocks = useUnlocks()
  const setIsUnlocked = useSetIsUnlocked()
  useEffect(() => {
    if (count >= 1 && !unlocks.incrementNothing)
      setIsUnlocked("incrementNothing")
    if (count >= 2 && !unlocks.dot) setIsUnlocked("dot")
    if (count >= 5 && !unlocks.autobuyer) setIsUnlocked("autobuyer")
  }, [count])
}
