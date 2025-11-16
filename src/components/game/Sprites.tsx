import { useSprites } from "@store"
import { useEffect, useRef } from "react"

export default function Sprites() {
  const sprites = useSprites()
  const canvasRef = useRef(null)

  let x = 100
  let y = 600

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.fillStyle = "white"

    const width = 10
    const height = window.innerHeight

    const drawSprite = () => {
      // head
      ctx.beginPath()
      ctx.arc(0, 20, 10, 0, Math.PI * 2)
      ctx.fill()

      // body
      ctx.beginPath()
      ctx.fillRect(-1, 20, 3, 20)
      ctx.fill()

      // eye
      ctx.beginPath()
      ctx.arc(3, 20, 5, 0, Math.PI * 2)
      ctx.fillStyle = "black"
      ctx.fill()

      // LEFT LEG
      ctx.save()
      ctx.translate(0, 38)
      ctx.rotate(1) // angle
      ctx.translate(0, -35)
      ctx.beginPath()
      ctx.fillStyle = "white"
      ctx.fillRect(1, 35, 2, 7)
      ctx.fill()
      ctx.restore()

      // RIGHT LEG
      ctx.save()
      ctx.translate(4, 38)
      ctx.rotate(2.2)
      ctx.translate(0, -40)
      ctx.beginPath()
      ctx.fillStyle = "white"
      ctx.fillRect(3, 35, 2, 7)
      ctx.fill()
      ctx.restore()
    }

    const moveSprite = () => {
      requestAnimationFrame(moveSprite)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      x += 0.5

      ctx.save()
      ctx.translate(100, 100)
      drawSprite()
      ctx.restore()
    }
    moveSprite()
  })

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  )
}
