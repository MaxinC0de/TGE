/* prettier-ignore */
import { Count, Nothings, Dot, Sprites, UpgradesMenu, MainButtons, UnlockIncrementNothingButton } from "@components"
import { useUnlockProgressionEffect } from "@hooks"
import { useUnlocks, useScreen } from "@store"
import "./spriteGenerator"

export default function Home() {
  // à la fin du layer everything vient lui parler et nothing se jette sur lui créant le big bang
  // there is nothing, and youre the god of nothing

  // pour les autobuyers : ils courent puis s'arrete et vole et se sacrifie pour un nothing
  // puis on débloque la possibilité de courrir sur les murs
  // à la fin un monstre est en haut et mange tout

  useUnlockProgressionEffect()
  const unlocks = useUnlocks()
  const screen = useScreen()
  if (screen === "upgrades") return <UpgradesMenu />
  return (
    <>
      {!unlocks.incrementNothing && (
        <UnlockIncrementNothingButton setIsUnlocked />
      )}
      <div className="relative flex flex-col h-screen justify-around overflow-hidden">
        <Count />
        {unlocks.dot && <Dot direction="upgrades" />}
        <MainButtons />
        <Nothings />
        <Sprites />
      </div>
    </>
  )
}
