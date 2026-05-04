import { useEffect, useState } from "react"

/**
 * LoadingScreen - Reusable full-screen loading indicator
 *
 * Displays the Bocah Say Hi GIF with a friendly Indonesian message,
 * centered on screen with a soft fade-in animation.
 *
 * @param {string} message - Optional override for the loading text
 */

const messages = [
  "Sebentar ya… ceritanya lagi disiapkan! 📖",
  "Tunggu sebentar… permainannya lagi dibangunkan! 🎈",
  "Sabar ya… soalnya lagi dibuat! ✏️",
  "Sebentar ya… Bocah lagi nyiapin semuanya! 🌟",
]

export default function LoadingScreen({ message }) {
  const [visible, setVisible] = useState(false)

  // Fade in slightly after mount for a smooth entrance
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30)
    return () => clearTimeout(t)
  }, [])

  // Pick a consistent message (first one) or use override
  const displayText = message || messages[0]

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(253, 246, 227, 0.96)",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.35s ease",
        gap: "20px",
      }}
    >
      {/* GIF */}
      <div
        style={{
          animation: "loadingBounce 2.2s ease-in-out infinite",
        }}
      >
        <img
          src="/assets/budayana/islands/bocah say hi.gif"
          alt="Memuat..."
          style={{
            width: "280px",
            height: "280px",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Child-friendly text */}
      <p
        style={{
          fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Nunito', cursive, sans-serif",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#5a3e1b",
          textAlign: "center",
          maxWidth: "280px",
          lineHeight: 1.5,
          margin: 0,
          animation: "loadingPulse 2s ease-in-out infinite",
        }}
      >
        {displayText}
      </p>

      {/* Inline keyframes */}
      <style>{`
        @keyframes loadingBounce {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes loadingPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}
