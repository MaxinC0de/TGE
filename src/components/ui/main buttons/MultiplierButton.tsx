import { useIncrementMultiplier } from "@store"

export default function MultiplierButton() {
  const incrementMultiplier = useIncrementMultiplier()
  return (
    <button onClick={() => incrementMultiplier()} className="button"></button>
  )
}
