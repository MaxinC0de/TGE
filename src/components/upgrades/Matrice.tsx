import { useEffect, useRef } from "react"
import { setupCanvas, calcMaxStreams, genStreams } from "@utils"

const speed = 5
const resetHeight = -1000

export default function Matrice() {
  const canvas1 = useRef(null)
  const canvas2 = useRef(null)
  const canvas3 = useRef(null)

  useEffect(() => {
    if (!canvas1.current || !canvas2.current || !canvas3.current) return
    const layer1 = setupCanvas(canvas1.current)
    const layer2 = setupCanvas(canvas2.current)
    const layer3 = setupCanvas(canvas3.current)

    const streams1 = genStreams()
    const streams2 = genStreams()
    const streams3 = genStreams()

    let lastFrameTime = null

    const drawLayer = (ctx, streams) => {
      ctx.clearRect(0, 0, layer1.width, layer1.height)
      streams.forEach((stream) => {
        stream.glyphs.forEach((glyph, i) => {
          ctx.fillText(glyph, stream.x, stream.y + i * 20)
        })
      })
    }

    const move = (streams, delta) => {
      if (delta > 10) {
        streams.forEach((stream) => {
          if (stream.y > window.innerHeight) {
            stream.y = -200
          }
          stream.y += 1.5
        })
      }
    }

    const animate = (t) => {
      if (lastFrameTime === null) lastFrameTime = t
      const delta = t - lastFrameTime

      drawLayer(layer1.ctx, streams1)
      drawLayer(layer2.ctx, streams2)
      drawLayer(layer3.ctx, streams3)

      move(streams1, delta)
      move(streams2, delta)
      move(streams3, delta)

      lastFrameTime = t

      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [])
  return (
    <div className="absolute top-0 left-0 flex w-screen h-screen">
      <canvas
        ref={canvas1}
        className="absolute w-screen h-screen top-0 left-0 blur-[2px]"
      />
      <canvas
        ref={canvas2}
        className="absolute w-screen h-screen top-0 left-0 blur-md"
      />
      <canvas
        ref={canvas3}
        className="absolute w-screen h-screen top-0 left-0 blur-xl"
      />
    </div>
  )
}
