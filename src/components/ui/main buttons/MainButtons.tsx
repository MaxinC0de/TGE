// prettier-ignore
import { IncrementCapAnimation, AutobuyerButton, IncrementCapButton, MultiplierButton, NothingButton } from "@components"
import { useCount, useCap, useUnlocks } from "@store"
import { useCapAnimation } from "@hooks"

// un par seconde qui génère un svg par s et qui s'élève et se
// sacrifie pour devenir un nothing
// bug : click sur nothing pendant l'animation increase le cap

export default function MainButtons() {
  const count = useCount()
  const cap = useCap()
  const { isAnimating, triggerCapAnimation } = useCapAnimation()
  const canIncreaseCap = count === cap
  const unlocks = useUnlocks()
  const { incrementNothing, autobuyer, multiplier } = unlocks
  return (
    <>
      {isAnimating && <IncrementCapAnimation isAnimating={isAnimating} />}
      <div
        className={`grid grid-cols-3 w-[250px]
          absolute z-10 bottom-12 left-1/2 -translate-x-1/2 ${isAnimating ? "pointer-events-none" : ""}`}
      >
        {multiplier ? <MultiplierButton /> : <div />}
        {canIncreaseCap ? (
          <IncrementCapButton triggerCapAnimation={triggerCapAnimation} />
        ) : incrementNothing ? (
          <NothingButton />
        ) : (
          <div />
        )}
        {autobuyer ? <AutobuyerButton /> : <div />}
      </div>
    </>
  )
}
