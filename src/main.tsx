import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import "./styles/animations.css"
import Home from "./app/Home"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
