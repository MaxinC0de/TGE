import { useNothingStore } from "@store"

setInterval(() => {
  const sprites = useNothingStore.getState().sprites
  const incrementSprites = useNothingStore.getState().incrementSprites
  const autobuyers = useNothingStore.getState().autobuyers
  if (autobuyers > 0) incrementSprites()
  // if (sprites > 48) window.location.reload()
}, 5000)
