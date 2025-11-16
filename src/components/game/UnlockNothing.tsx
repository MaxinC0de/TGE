import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

// prettier-ignore
const NOTHING = [[1,1],[1,2],[1,3],[1,4],[2,1],[3,1],[3,2],[3,3],[3,4],[5,1],[5,2],[5,3],[5,4],[6,1],[7,1],[7,2],[7,3],[7,4],[6,4],[9,1],[10,1],[11,1],[10,2],[10,3],[10,4],[13,1],[13,2],[13,3],[13,4],[15,1],[15,2],[15,3],[15,4],[14,2.5],[17,1],[17,2],[17,3],[17,4],[19,1],[19,2],[19,3],[19,4],[20,1],[21,1],[21,2],[21,3],[21,4],[23,1],[23,2],[23,3],[23,4],[24,1],[25,1],[24,4],[25,4],[25,3]];

const setup = (canvasRef) => {
  const canvas = canvasRef.current
  document.body.style.background = "white"
  const ctx = canvas.getContext("2d")
  const dpr = window.devicePixelRatio
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  return ctx
}

// checker que tout est noir et puis prestige avec au niveau suivant un point blanc en plus

export default function UnlockNothing() {
  const canvasRef = useRef(null)
  useEffect(() => {
    if (!canvasRef.current) return
    const ctx = setup(canvasRef)

    const size = 100

    const range = () => 100 + Math.random() * 200

    const animate = () => {
      ctx.fillStyle = "black"
      // ctx.clearRect(0, 0, 1000, 1000)
      ctx.fillRect(range(), 100, 100, 100)
      ctx.fillRect(200, range(), 100, 100)
      // ctx.rect(100, 300, 300, 100)
      // ctx.rect(200, 300, 100, 300)

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  )
}

// NOTHING et puis on rentre dans le O
// chaque reset ajoute un point blanc pour compléter nothing
// au début un gros bloc
// puis autobuyers et plus de speed
// prestige
// ajouter le point sur le i à la fin
