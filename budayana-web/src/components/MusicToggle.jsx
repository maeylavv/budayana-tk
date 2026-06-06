import { useMusic } from "../hooks/useMusic"

export default function MusicToggle({ className = "", style = {} }) {
  const { isMuted, toggle } = useMusic()

  return (
    <button
      onClick={toggle}
      className={`music-toggle-btn ${className}`}
      aria-label="Toggle Music"
      style={{
        background: "#FEF6DF",
        border: "3px solid #955C2E",
        borderRadius: "50%",
        padding: "8px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease",
        width: "55px",
        height: "55px",
        boxSizing: "border-box",
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"
      }}
    >
      <img
        src={
          isMuted
            ? "/assets/budayana/islands/speaker mute-logo.png"
            : "/assets/budayana/islands/speaker-logo.png"
        }
        alt={isMuted ? "Music Muted" : "Music Playing"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }}
      />
    </button>
  )
}

