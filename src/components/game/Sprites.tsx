import { useEffect, useRef } from "react"
import {
  renderSprites,
  updateSprites,
  renderParticles,
  updateParticles,
  renderGos,
  updateGos
} from "@utils"
import { useCanvas, useSpriteData, useParticleData } from "@hooks"
import { useSprites, useAutobuyers } from "@store"
import { CONFIG } from "@utils"

export default function Sprites() {
  const autobuyers = useAutobuyers()

  const canvasRef = useRef(null)
  const frameCountRef = useRef(0)

  const spritesCount = useSprites()
  const ctx = useCanvas(canvasRef)
  const spritesDataRef = useSpriteData(spritesCount)
  const particlesDataRef = useParticleData(spritesDataRef.current)

  const oldestRef = useRef(null)

  useEffect(() => {
    oldestRef.current = [...spritesDataRef.current].sort(
      (a, b) => a.birthTime - b.birthTime
    )[0]
  }, [spritesDataRef.current])

  useEffect(() => {
    if (!ctx) return
    let frameId: number

    const animate = () => {
      frameCountRef.current++
      ctx.clearRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height)

      // prettier-ignore
      updateSprites(spritesDataRef.current, frameCountRef.current)
      renderSprites(ctx, spritesDataRef.current)

      updateParticles(particlesDataRef.current)
      renderParticles(ctx, particlesDataRef.current, spritesDataRef.current)

      renderGos(ctx, oldestRef.current)
      updateGos(ctx, spritesDataRef.current, oldestRef.current)

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
