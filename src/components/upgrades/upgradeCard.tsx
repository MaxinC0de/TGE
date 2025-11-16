import { Letters } from "@components"
import { useIsTranslated, useIsBuyable } from "@hooks"
import { useCount, useSetIsBought } from "@store"

export default function UpgradeCard({ upgrade, index }) {
  //   const [isTranslated, setIsTranslated] = useState(false)
  const isTranslated = useIsTranslated()
  const neededLetters = () => {
    const arrayLetters = upgrade?.name.split(" ")
    return arrayLetters.map((string) => string.length)
  }
  const letters = neededLetters()
  const setIsBought = useSetIsBought()
  const count = useCount()
  const handleClick = () => {
    if (count >= upgrade.cost) {
      setIsBought(upgrade.key)
    }
  }

  const isBuyable = useIsBuyable(upgrade.isBought ? undefined : upgrade.cost)
  return (
    <button
      onClick={handleClick}
      className="flex flex-wrap justify-center gap-3 cursor-pointer"
    >
      {isTranslated ? (
        <p>{upgrade.name}</p>
      ) : (
        letters.map((length, i) => (
          <Letters
            key={i}
            length={length}
            isBought={upgrade.isBought}
            isBuyable={isBuyable}
          />
        ))
      )}
    </button>
  )
}
