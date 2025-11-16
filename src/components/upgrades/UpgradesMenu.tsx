import { Dot, Matrice, UpgradesList } from "@components"

export default function UpgradesMenu() {
  // animation à la matrix avec les nombres mais ici avec les symboles en fond
  return (
    <div className="overflow-hidden">
      <Dot direction="main" />
      {/* <Matrice /> */}
      <UpgradesList />
    </div>
  )
}
