import { useCount } from "@store"

export default function Count() {
  const count = useCount()
  return (
    <div className="absolute z-20 top-0 left-1/2 -translate-x-1/2 text-white">
      <p>tu as rien de chez rien = {count} rien's petite salope</p>
      <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank">
        clic ici si tu veux gagner un gros boost en puissance et débloquer du
        contenu
      </a>
      <p className="mt-6 text-black font-black">v.√-1</p>
    </div>
  )
}

// les nothing apparaissent au harsard sur l'écran
// les upgrades sont pas traduites
// petit bonhomme en T avec une grosse tête
// langage crée pour que tout le monde se comprenne
