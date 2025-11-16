import { useCount } from "@store"

export default function Count() {
  const count = useCount()
  return (
    <div className="flex justify-center pt-3">
      nothing et puis {count} lorsque débloqué
    </div>
  )
}

// les nothing apparaissent au harsard sur l'écran
// les upgrades sont pas traduites
// petit bonhomme en T avec une grosse tête
// langage crée pour que tout le monde se comprenne
