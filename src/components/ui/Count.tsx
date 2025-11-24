import { useCount } from "@store"

export default function Count() {
  const count = useCount()
  return (
    <div className="absolute z-20 top-0 left-1/2 -translate-x-1/2 text-white">
      <p>{count}</p>
      <p className="mt-6 text-white font-black">
        v.√-1 // make buttons squared + gumroad effect
      </p>
    </div>
  )
}

// les nothing apparaissent au harsard sur l'écran
// les upgrades sont pas traduites
// petit bonhomme en T avec une grosse tête
// langage crée pour que tout le monde se comprenne
