const NUMBER_OF_ALTARS = 20
const GAP_TO_ALTAR_RATIO = 2
const ALTAR_WIDTH = 25

export const CONFIG = {
  canvas: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  sprite: {
    width: 40,
    initialPosition: -10,
    minWalkSpeed: 0.1,
    maxWalkSpeed: 2,
    boundaryPadding: 10,
    lifetime: 10000
  },
  physics: {
    fallSpeed: 5,
    horizontalDrift: 0.1,
    gravity: 0.2
  },
  particle: {
    count: 20,
    minSpeed: 1,
    maxSpeed: 4,
    lifetime: 60
  },
  altar: {
    width: ALTAR_WIDTH,
    gap: ALTAR_WIDTH * GAP_TO_ALTAR_RATIO
  }
}

export const GROUND_OFFSET = CONFIG.canvas.height - CONFIG.sprite.width
