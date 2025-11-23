export const createParticleData = () => {
  return {
    x: 0,
    y: 0,
    direction: Math.random() > 0.5 ? "left" : "right",
    velocity: Math.random() * 2 - 0.2
  }
}
