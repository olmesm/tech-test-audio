import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const SHOW_NATIVE_CONTROLS = true

const MEDIA_API = "/media"

const App = () => {
    const [isLoading, setIsLoading] = React.useState(false)

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
                <h1>Internet Radio</h1>
                <h2>Pop Today</h2>
            </hgroup>

            <img className="player__image" 
                src="/media/images/cd-cover-2978944_640.jpg" alt=""
            />

            <audio
                src="/media/audio/560446__migfus20__happy-background-music.mp3"
                controls={SHOW_NATIVE_CONTROLS}
            ></audio>

            <button>Play</button>
            <button>Stop</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
   </React.StrictMode>,
)
