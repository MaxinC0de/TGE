import { useIncrementCount } from "@store"

export default function NothingButton() {
  const incrementCount = useIncrementCount()
  return (
    <button onClick={() => incrementCount()} className="button">
      Nothing
    </button>
  )
}
