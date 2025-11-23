import { useEffect, useRef } from "react"
import {
  renderSprites,
  updateSprites,
  renderParticles,
  updateParticles,
  renderAltars
} from "@utils"
import {
  useCanvas,
  useSpriteData,
  useParticleData,
  useAltarsPositionsData
} from "@hooks"
import { useSprites, useAutobuyers } from "@store"
import { CONFIG } from "@utils"

export default function Sprites() {
  const autobuyers = useAutobuyers()

  const canvasRef = useRef(null)
  const frameCountRef = useRef(0)
  const altarsCount = 20

  const spritesCount = useSprites()
  const ctx = useCanvas(canvasRef)
  const spritesDataRef = useSpriteData(spritesCount)
  const particlesDataRef = useParticleData(spritesDataRef.current)
  const altarsPositions = useAltarsPositionsData(altarsCount)

  useEffect(() => {
    if (!ctx) return
    let frameId: number

    const animate = () => {
      frameCountRef.current++
      ctx.clearRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height)

      // prettier-ignore
      updateSprites(spritesDataRef.current, frameCountRef.current, altarsPositions)
      renderSprites(ctx, spritesDataRef.current)

      updateParticles(particlesDataRef.current)
      renderParticles(ctx, particlesDataRef.current, spritesDataRef.current)

      renderAltars(ctx, altarsPositions)

      frameId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frameId)
  }, [ctx, spritesDataRef, particlesDataRef])

  return (
    <>
      {autobuyers !== 0 && (
        <canvas ref={canvasRef} className="w-screen h-screen" />
      )}
    </>
  )
}
