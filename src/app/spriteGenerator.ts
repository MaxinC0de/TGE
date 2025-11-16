import { useNothingStore } from "@store"

setInterval(() => {
  const incrementSprites = useNothingStore.getState().incrementSprites
  const autobuyers = useNothingStore.getState().autobuyers
  if (autobuyers > 0) incrementSprites()
}, 5000)
