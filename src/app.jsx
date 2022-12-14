import React from "react"
import "./index.css"

const SHOW_NATIVE_CONTROLS = true

const data = {
    name: "Pop Today",
    src_url: "/api/audio/560446__migfus20__happy-background-music.mp3",
    logo: "/api/images/cd-cover-2978944_640.jpg", 
}

export const App = () => {
    if (!data) {
        return (
            <div>
                <p aria-busy="true">Please wait…</p>
            </div>
        )
    }

    return (
        <div>
            <hgroup>
                <h1>{data.name}</h1>
                <p>on the Internet Radio</p>
            </hgroup>

            <div className="player__image">
                <img src={data.logo} alt="" />
            </div>
        
            <audio
              data-testid="audio"
              src={data.src_url}
              controls={SHOW_NATIVE_CONTROLS}
            />

            <button data-testid="play">Play</button>
            <button data-testid="pause">Pause</button>
        </div>
    )
}
