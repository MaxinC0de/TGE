export const updateGos = (ctx, sprites, oldest) => {
  const now = performance.now()
  shootLaser(ctx, oldest)
  if (now - oldest.birthTime > 4000) oldest.state = "levitating"
}

const gos = {
  state: "idle" as "shooting"
}

const laserPosition = {
  x: 140,
  y: 130
}

let laser = {
  x: laserPosition.x,
  y: laserPosition.y
}

const easeOutCubic = (t) => 1 - Math.pow(t, 3)

const shootLaser = (ctx, oldest) => {
  if (gos.state !== "shooting") return
  const maxDistance = window.innerWidth * 0.8
  const progress = (laser.x - laserPosition.x) / maxDistance

  const baseSpeed = 5
  const easedSpeed = baseSpeed * easeOutCubic(progress)

  ctx.fillStyle = "pink"
  ctx.fillRect(laserPosition.x, laserPosition.y, laser.x, 20, 20)

  laser.x += easedSpeed
}
