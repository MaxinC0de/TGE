import { CONFIG } from "@utils"

export const moveDirection = (sprites) => {
  const now = performance.now()
  sprites.forEach((sprite) => {
    if (sprite.state !== "moving") return
    if (sprite.x > CONFIG.canvas.width) sprite.direction = "left"
    if (sprite.x < 0) sprite.direction = "right"
    sprite.direction === "right"
      ? (sprite.x += sprite.speed)
      : (sprite.x -= sprite.speed)
  })
}
