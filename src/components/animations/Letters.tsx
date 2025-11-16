import { useState, useEffect } from "react"

// prettier-ignore
const alphabet = ["ꖇ","ꖏ","ꖚ","ꖜ","ꖝ","ꖞ","ꖟ","ꖠ","ꖡ","ꖢ","ꖥ","ꖦ","ꗃ","ꗅ","ꗇ","ꗉ","ꗋ","ꗌ","ꗎ","ꗞ","ꗧ","ꘃ","ꘅ","ꘇ","ꘉ","ꘋ","꘍","꘎","꘦","꘩","ꘐ","ꛏ","ꛑ","ꛓ","ꛔ","ꛗ"];

const randGlyph = () => alphabet[Math.floor(Math.random() * alphabet.length)]

export default function Letters({ length, isBuyable, isBought }) {
  const [glyphs, setGlyphs] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setGlyphs(Array.from({ length }, randGlyph))
    }, 100)
    return () => clearInterval(interval)
  }, [length])

  return (
    <div
      className={`flex bg-black rounded-md border border-white px-2 py-0.5
        ${isBought ? "bg-white text-black" : "bg-black text-white"} transition-colors duration-500`}
    >
      {glyphs.map((glyph, i) => (
        <span
          key={i}
          className={`w-5 text-center ${isBuyable && !isBought ? "glow" : ""}`}
        >
          {glyph}
        </span>
      ))}
    </div>
  )
}
