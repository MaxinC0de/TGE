import { UpgradeCard } from "@components"
import { useUpgrades } from "@store"

export default function Upgrades() {
  const upgrades = useUpgrades()
  return (
    <div className="relative flex flex-col items-center mt-[40vh] gap-6">
      {upgrades.map((upgrade, i) => (
        <UpgradeCard key={i} upgrade={upgrade} index={i} />
      ))}
    </div>
  )
}
