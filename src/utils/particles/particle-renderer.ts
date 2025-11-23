export const renderParticles = (ctx, particles, sprites) => {
  ctx.fillStyle = "white"
  sprites.forEach((sprite) => {
    if (!sprite.isDead) return
    particles.forEach((particle) => {
      ctx.beginPath()
      ctx.arc(sprite.x, sprite.y + 15, 10, 0, Math.PI * 2)
      ctx.fill()
    })
  })
}
