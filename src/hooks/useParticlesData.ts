import { useEffect, useRef } from "react"
import { createParticleData } from "@utils"

export const useParticleData = (sprites) => {
  const particlesDataRef = useRef([])
  useEffect(() => {
    particlesDataRef.current = sprites.map(
      (sprite) => Array.from({ length: 20 }),
      () => createParticleData(sprite)
    )
  }, [sprites])
  return particlesDataRef
}
