// prettier-ignore
import { moveDirection, CONFIG, GROUND_OFFSET } from "@utils"

export const updateSprites = (sprites, frameCount, altarsPositions) => {
  fall(sprites)
  moveDirection(sprites, altarsPositions)
  levitate(sprites, frameCount)
  dropBody(sprites)
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
    if (sprite.y > CONFIG.canvas.height / 2) {
      sprite.y -= 1
      sprite.x = sprite.x + Math.sin(frameCount * 0.5) * 0.5
    } else {
      sprite.x = sprite.x + Math.sin(frameCount * 0.5) / 2
      sprite.state = "exploding"
    }
  })
}

const dropBody = (sprites) => {
  sprites.forEach((sprite) => {
    if (sprite.state !== "exploding") return
    if (sprite.dropFallOffset > CONFIG.canvas.height) return
    sprite.dropFallOffset++
  })
}
