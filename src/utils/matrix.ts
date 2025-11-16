// prettier-ignore
const alphabet = ["ꖇ","ꖏ","ꖚ","ꖜ","ꖝ","ꖞ","ꖟ","ꖠ","ꖡ","ꖢ","ꖥ","ꖦ","ꗃ","ꗅ","ꗇ","ꗉ","ꗋ","ꗌ","ꗎ","ꗞ","ꗧ","ꘃ","ꘅ","ꘇ","ꘉ","ꘋ","꘍","꘎","꘦","꘩","ꘐ","ꛏ","ꛑ","ꛓ","ꛔ","ꛗ"]

const randIdx = () => Math.floor((Math.random() * alphabet.length) / 2.67)

const randGlyph = () => alphabet[Math.floor(Math.random() * alphabet.length)]

export const genGlyphs = () => {
  const n = randIdx()
  return Array.from({ length: n }, randGlyph)
}

export const genStreams = () => {
  const maxStreams = Math.floor(window.innerWidth / 24)

  const genStream = () => {
    const now = performance.now()
    return {
      glyphs: genGlyphs(),
      x: Math.floor(Math.random() * maxStreams * 24),
      y: Math.floor(Math.random() * window.innerHeight),
      startTime: now + Math.random() * 800
    }
  }

  return Array.from({ length: 100 }, genStream)
}

export const setupCanvas = (canvas) => {
  const ctx = canvas.getContext("2d")
  const dpr = window.devicePixelRatio || 1

  const widthCSS = canvas.clientWidth
  const heightCSS = canvas.clientHeight

  canvas.width = widthCSS * dpr
  canvas.height = heightCSS * dpr

  ctx.resetTransform()
  ctx.scale(dpr, dpr)

  ctx.fillStyle = "white"
  ctx.font = "10px Arial"
  ctx.textAlign = "center"

  return { ctx, width: widthCSS, height: heightCSS }
}
