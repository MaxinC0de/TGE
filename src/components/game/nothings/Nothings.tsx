import { useUpgrades } from "@store"
import NothingItem from "./NothingItem"
import { useNothingPositions } from "./useNothingPositions"

export default function Nothings() {
  const upgrades = useUpgrades()

  const organizedUpgrade = upgrades.find((u) => u.key === "organized")
  const isOrganized = !!organizedUpgrade?.isBought

  const nothingPositions = useNothingPositions(!isOrganized)

  return (
    <div className="flex flex-col items-center mt-[5vh] mx-auto w-[85vw] h-[60vh]">
      <div className="flex flex-wrap text-left">
        {isOrganized ? (
          <span>nothing</span>
        ) : (
          nothingPositions.map(({ x, y }, i) => (
            <NothingItem key={i} x={x} y={y} isOrganized={isOrganized} />
          ))
        )}
      </div>
    </div>
  )
}
