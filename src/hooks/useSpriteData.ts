import { useEffect, useRef } from "react"
import { createSpriteData } from "@utils"

export const useSpriteData = (spritesCount) => {
  const spritesDataRef = useRef([])
  useEffect(() => {
    const current = spritesDataRef.current
    spritesDataRef.current = Array.from({ length: spritesCount }).map(
      (_, i) => current[i] ?? createSpriteData()
    )
  }, [spritesCount])
  return spritesDataRef
}
