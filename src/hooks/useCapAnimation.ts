import { useState } from "react"
import { useCount, useCap, useReset } from "@store"

export const useCapAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const count = useCount()
  const cap = useCap()
  const reset = useReset()

  const triggerCapAnimation = () => {
    if (count === cap) {
      setIsAnimating(true)
      setTimeout(() => {
        reset()
        setIsAnimating(false)
      }, 2500)
    }
  }

  return { isAnimating, triggerCapAnimation }
}
