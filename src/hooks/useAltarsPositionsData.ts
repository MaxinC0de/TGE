import { useMemo } from "react"
import { CONFIG } from "@utils"

export const useAltarsPositionsData = (altarsCount) => {
  const altarWidth = CONFIG.altar.width
  const gap = CONFIG.altar.gap

  return useMemo(
    () =>
      Array.from({ length: altarsCount }).map((_, i) => {
        const leftEdge = gap + i * (gap + altarWidth)
        return leftEdge + altarWidth / 2
      }),
    [altarsCount, altarWidth, gap]
  )
}
