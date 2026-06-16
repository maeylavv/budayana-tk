import { useMusic } from "../hooks/useMusic"

export default function MusicToggle({ className = "", style = {} }) {
  const { isMuted, toggle } = useMusic()

  return (
    <button
      onClick={toggle}
      className={`music-toggle-btn ${className}`}
      aria-label="Toggle Music"
      style={style}
    >
      <img
        src={
          isMuted
            ? "/assets/budayana/islands/speaker mute-logo.png"
            : "/assets/budayana/islands/speaker-logo.png"
        }
        alt={isMuted ? "Music Muted" : "Music Playing"}
      />
    </button>
  )
}

