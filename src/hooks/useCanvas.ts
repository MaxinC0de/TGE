import { useEffect, useState } from "react"

export const useCanvas = (canvasRef) => {
  const [ctx, setCtx] = useState(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    setCtx(ctx)

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }, [])
  return ctx
}
