import { useIncrementCap } from "@store"

export default function IncrementCapButton({ triggerCapAnimation }) {
  const incrementCap = useIncrementCap()
  return (
    <button
      onClick={() => {
        incrementCap()
        triggerCapAnimation()
      }}
      className="button relative z-10"
    >
      <div className="radiance absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    </button>
  )
}
