import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const MEDIA_API_INDEX = "/media/index.json"

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const player = new Audio("/media/audio/560446__migfus20__happy-background-music.mp3")

    if (isLoading) {
        return (
            <div>
                <p aria-busy="true">Please wait…</p>
            </div>
        )
    }

    return (
        <div>
            <hgroup>
                <h1>Pop Today</h1>
                <p>on the Internet Radio</p>
            </hgroup>

            <img className="player__image" 
                src="/media/images/cd-cover-2978944_640.jpg" alt=""
            />

            <button onClick={player.play}>Play</button>
            <button onClick={player.pause}>Stop</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="container-fluid">
      <App />
    </main>
  </React.StrictMode>,
)
