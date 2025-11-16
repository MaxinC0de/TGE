import { useState, useEffect } from "react"
import { useCount } from "@store"
import { getRandomPosition } from "@utils"

type Position = { x: number; y: number }

export const useNothingPositions = (isActive) => {
  const [positions, setPositions] = useState<Position[]>([])
  const count = useCount()

  useEffect(() => {
    if (!isActive) {
      setPositions([])
      return
    }

    setPositions((prev) => {
      if (!isActive) {
        return []
      }

      if (prev.length < count) {
        const newPositions = [...prev]
        while (newPositions.length < count) {
          newPositions.push(getRandomPosition())
        }
        return newPositions
      }

      if (prev.length > count) {
        return prev.slice(0, count)
      }

      return prev
    })
  }, [isActive, count])

  return positions
}
