export const getRandomPosition = () => {
  const x = window.innerWidth * Math.random() * 0.8
  const y = window.innerHeight * Math.random() * 0.8
  return { x, y }
}
