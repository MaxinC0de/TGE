import { useSetIsUnlocked } from "@store"

export default function UnlockIncrementNothingButton() {
  const setIsUnlocked = useSetIsUnlocked()
  return (
    <button
      onClick={() => setIsUnlocked("incrementNothing")}
      className="absolute z-10 left-1/2 -translate-x-1/2 mt-[40vh] cursor-pointer"
    >
      NOTHING
    </button>
  )
}
