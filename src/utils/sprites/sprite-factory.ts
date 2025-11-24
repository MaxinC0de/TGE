import { CONFIG } from "@utils"

export const createSpriteData = () => {
  const { minWalkSpeed, maxWalkSpeed } = CONFIG.sprite
  const randomInitialDirection = Math.random() > 0.5 ? "right" : "left"
  return {
    serialKey: crypto.randomUUID(),
    x: randomInitialDirection === "right" ? -10 : CONFIG.canvas.width + 10,
    y: -10,
    speed: Math.random() * (maxWalkSpeed - minWalkSpeed) + minWalkSpeed,
    state: "falling" as "falling" | "moving" | "levitating" | "exploding",
    horizontalDrift: 0.5,
    initialDirection: randomInitialDirection,
    birthTime: performance.now(),
    fallSpeed: 25,
    bodyFallOffset: 0,
    bodyRotation: 1
  }
}
