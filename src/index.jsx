import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="container-fluid">
      <App />
    </main>
  </React.StrictMode>,
)
