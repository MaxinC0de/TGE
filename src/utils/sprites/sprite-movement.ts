import { CONFIG } from "@utils"

export const moveDirection = (sprites, altarPositions) => {
  const now = performance.now()
  sprites.forEach((sprite) => {
    if (sprite.state !== "moving") return

    const closestAltar = findClosestAltar(
      sprite.direction,
      sprite.x,
      altarPositions
    )

    const altarTreshold = 5

    if (closestAltar !== undefined) {
      const isDying = now - sprite.birthTime > CONFIG.sprite.lifetime - 4000
      const isAtAltar = altarTreshold > Math.abs(sprite.x - closestAltar)

      if (isDying && isAtAltar) {
        sprite.x = closestAltar
        sprite.state = "levitating"
        return
      }
    }

    if (sprite.x > CONFIG.canvas.width) sprite.direction = "left"
    if (sprite.x < 0) sprite.direction = "right"
    sprite.direction === "right"
      ? (sprite.x += sprite.speed)
      : (sprite.x -= sprite.speed)
  })
}

const findClosestAltar = (spriteDirection, spritePosition, altarPositions) => {
  if (spriteDirection === "right") {
    return altarPositions.filter((position) => position > spritePosition)[0]
  } else {
    const filtered = altarPositions.filter(
      (position) => position < spritePosition
    )
    return filtered[filtered.length - 1]
  }
}
