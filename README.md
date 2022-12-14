# React Tech test

---

An internet radio for frontend tech testing.

Requires node >v16. Uses vite.js and react.

## Tasks

- Refactor the app so it fetches radio stations and related data from the server: `/api/index.json`
- Implement play/pause
    - Control the HTMLMediaElement (`<audio ... />`) via a DOM node reference in react. The play/pause methods can then be controlled from the respective buttons. See the docs on [HTMLMediaElement instance methods](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#instance_methods).
    - Disable the browser control by setting [`const SHOW_NATIVE_CONTROLS = false`](./src/index.jsx#L6).
- [TODO] ensure the app matches the designs
- Create the ability to cycle between the stations
- Ensure all station logo's are rendered

## Development

```bash
# Install dependencies
npm install

# Run the server
npm run dev
```

---

## Attributions

### Audio

- [public/api/audio/560446\_\_migfus20\_\_happy-background-music.mp3](https://freesound.org/people/Migfus20/sounds/560446/)
- [public/api/audio/662105\_\_davejf\_\_sax-riff.mp3](https://freesound.org/people/DaveJf/sounds/662105/)
- [public/api/audio/662275\_\_davejf\_\_guitar-melody.mp3](https://freesound.org/people/DaveJf/sounds/662275/)

### Images

- [public/api/images/guitar-756326_640.jpg](https://pixabay.com/photos/guitar-guitarist-music-756326/) by [Firmbee](https://pixabay.com/users/firmbee-663163/?utm_source=link-attribution)
- [public/api/images/jazz-1658886_640.jpg](https://pixabay.com/photos/jazz-concert-singer-blues-music-1658886/) by [Sepp](https://pixabay.com/users/sepph-1859049/?utm_source=link-attribution)
- [public/api/images/cd-cover-2978944_640.jpg](https://pixabay.com/photos/cd-cover-woman-piano-composing-2978944/) by [Stefan Keller](https://pixabay.com/users/kellepics-4893063/?utm_source=link-attribution)
