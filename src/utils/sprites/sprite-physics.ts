// prettier-ignore
import { moveDirection, CONFIG, GROUND_OFFSET } from "@utils"

export const updateSprites = (sprites, frameCount) => {
  fall(sprites)
  moveDirection(sprites)
  levitate(sprites, frameCount)
}

export const fall = (sprites) => {
  sprites.forEach((sprite) => {
    if (sprite.state !== "falling") return
    if (GROUND_OFFSET > sprite.y) {
      if (sprite.initialDirection === "right") {
        sprite.x += sprite.horizontalDrift
      } else {
        sprite.x -= sprite.horizontalDrift
      }
      sprite.y += sprite.fallSpeed
    } else {
      sprite.y = GROUND_OFFSET
      sprite.state = "moving"
    }
  })
}

const levitate = (sprites, frameCount) => {
  sprites.forEach((sprite) => {
    if (sprite.state !== "levitating") return

    const deltaX = CONFIG.canvas.width * 0.8 - sprite.x
    const deltaY = CONFIG.canvas.height * 0.1 - sprite.y

    sprite.x += deltaX * 0.02
    sprite.y += deltaY * 0.02
  })
}

const lerpTravel = (current, target, speed) => {
  let diff = target - current
  while (diff > Math.PI) diff -= Math.PI * 2
  while (diff < -Math.PI) diff += Math.PI * 2
  return current + diff * speed
}
