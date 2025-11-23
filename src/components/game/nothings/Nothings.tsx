import { useCount, useUpgrades } from "@store"
import NothingItem from "./NothingItem"
import { useNothingPositions } from "./useNothingPositions"

export default function Nothings() {
  const upgrades = useUpgrades()

  const count = useCount()

  const organizedUpgrade = upgrades.find((u) => u.key === "organized")
  const isOrganized = !!organizedUpgrade?.isBought

  const nothingPositions = useNothingPositions(!isOrganized)

  return (
    <div className="absolute w-screen h-screen">
      <div className="flex flex-wrap text-left">
        {isOrganized ? (
          <>
            {Array.from({ length: count }).map(() => (
              <span className="mx-1">nothing</span>
            ))}
          </>
        ) : (
          nothingPositions.map(({ x, y }, i) => (
            <NothingItem key={i} x={x} y={y} isOrganized={isOrganized} />
          ))
        )}
      </div>
    </div>
  )
}
