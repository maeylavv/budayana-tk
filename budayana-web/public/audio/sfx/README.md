# Audio SFX Files

Place the following MP3 files in this directory:

| File | When Played | Description |
|------|-------------|-------------|
| `correct.mp3` | On correct answer | Cheerful/positive sound |
| `wrong.mp3` | On wrong answer | Gentle, neutral sound |
| `result.mp3` | On results screen | Celebratory sound |

## Usage in GamePage
These files are loaded via the `useAudio` hook:
```js
const { play: playCorrect } = useAudio('/audio/sfx/correct.mp3')
const { play: playWrong }   = useAudio('/audio/sfx/wrong.mp3')
const { play: playResult }  = useAudio('/audio/sfx/result.mp3')
```

The code gracefully handles missing files — if a file is not found, it will silently fail without errors.
