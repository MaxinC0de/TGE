import { CONFIG, GROUND_OFFSET } from "@utils"

const NUMBER_OF_ALTARS = 20

export const renderAltars = (ctx, altarsPositions) => {
  ctx.strokeStyle = "white"
  altarsPositions.forEach((altar) => {
    ctx.strokeRect(
      altar - CONFIG.altar.width / 2,
      GROUND_OFFSET,
      CONFIG.altar.width,
      -400
    )
  })
}
