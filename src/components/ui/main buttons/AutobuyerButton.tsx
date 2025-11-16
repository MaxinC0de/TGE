import { useIncrementAutobuyers } from "@store"

export default function AutobuyerButton() {
  const incrementAutobuyers = useIncrementAutobuyers()
  return (
    <div className="flex justify-center">
      <button onClick={() => incrementAutobuyers()} className="button"></button>
    </div>
  )
}
