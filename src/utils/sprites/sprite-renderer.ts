export const renderSprites = (ctx, sprites) => {
  sprites.forEach((sprite) => {
    ctx.save()
    ctx.translate(sprite.x, sprite.y)
    renderSprite(ctx, sprite)
    ctx.restore()
  })
}

const renderSprite = (ctx, sprite) => {
  const HEAD_RADIUS = 10
  const HEAD_Y = 20
  const BODY_WIDTH = 3
  const BODY_HEIGHT = 20
  const EYE_RADIUS = 5
  const EYE_X_OFFSET = 3
  const LEG_WIDTH = 2
  const LEG_HEIGHT = 7

  // head
  ctx.fillStyle = "white"
  ctx.beginPath()
  ctx.arc(0, HEAD_Y, HEAD_RADIUS, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = "black"
  ctx.beginPath()
  ctx.arc(EYE_X_OFFSET, HEAD_Y, EYE_RADIUS, 0, Math.PI * 2)
  ctx.fill()

  // body
  ctx.save()
  ctx.translate(0, sprite.dropFallOffset || 0)
  // ctx.rotate()

  // torso
  ctx.fillStyle = "white"
  ctx.fillRect(-BODY_WIDTH / 2, HEAD_Y, BODY_WIDTH, BODY_HEIGHT)

  // legs
  ctx.save()
  ctx.fillStyle = "white"
  ctx.translate(0, 38)
  ctx.rotate(1)
  ctx.fillRect(0, 0, LEG_WIDTH, LEG_HEIGHT)
  ctx.restore()

  ctx.save()
  ctx.fillStyle = "white"
  ctx.translate(4, 38)
  ctx.rotate(2.2)
  ctx.fillRect(0, 0, LEG_WIDTH, LEG_HEIGHT)
  ctx.restore()

  ctx.restore()
}
