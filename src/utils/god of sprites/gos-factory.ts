let currentEyeAngle = 0

export const renderGos = (ctx, oldest, scale = 1) => {
  const gosPosition = {
    x: 70,
    y: 70
  }

  if (oldest) {
    const eyeLocalX = 70
    const eyeLocalY = 60

    const eyeWorldX = gosPosition.x + eyeLocalX * scale
    const eyeWorldY = gosPosition.y + eyeLocalY * scale

    const deltaX = oldest.x - eyeWorldX
    const deltaY = oldest.y - eyeWorldY
    const targetAngle = Math.atan2(deltaY, deltaX)
    currentEyeAngle = lerpAngle(currentEyeAngle, targetAngle, 0.5)
  }

  ctx.save()
  ctx.translate(70, 60)
  ctx.rotate(currentEyeAngle)

  // Circle (head)
  ctx.fillStyle = "white"
  ctx.beginPath()
  ctx.arc(0, 0, 183.5, 0, Math.PI * 2)
  ctx.fill()

  // Eye (black circle)
  ctx.save()
  ctx.translate(70, 60)
  ctx.rotate(currentEyeAngle)
  ctx.fillStyle = "black"
  ctx.beginPath()
  ctx.arc(0, 0, 541 - 458, 0, Math.PI * 2)
  ctx.fill()

  ctx.restore()
  ctx.restore()
}

const lerpAngle = (current, target, speed) => {
  let diff = target - current
  while (diff > Math.PI) diff -= Math.PI * 2
  while (diff < -Math.PI) diff += Math.PI * 2
  return current + diff * speed
}
