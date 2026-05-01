import { useState, useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Background music component with autoplay policy handling
 * Browsers block autoplay unless: user has interacted OR audio is muted
 * Strategy: Start muted, then unmute on first user interaction
 */
export default function BackgroundMusic() {
  const location = useLocation()
  const audioRef = useRef(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const isLandingPage = !!(location.pathname === '/' || location.pathname === '')

  useEffect(() => {
    const audioNode = audioRef.current;

    // Only continue if we're on the landing page
    if (!isLandingPage) {
      if (audioNode) audioNode.pause();
      return;
    }

    if (!audioNode) return

    // Set volume (0.0 - 1.0 range)
    audioNode.volume = 0.3

    // Try to play (may fail due to autoplay policy)
    const playPromise = audioNode.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay was blocked - will play after user interaction
        console.log("Autoplay blocked, waiting for user interaction")
      })
    }

    // Handle user interaction to enable audio
    const handleInteraction = () => {
      // Must double check audioNode and isLandingPage flag at interaction time
      if (!hasInteracted && audioNode) {
        setHasInteracted(true)
        audioNode.muted = false
        audioNode.play().catch(() => {})
      }
    }

    // Listen for any user interaction
    document.addEventListener("click", handleInteraction)
    document.addEventListener("keydown", handleInteraction)
    document.addEventListener("touchstart", handleInteraction)

    return () => {
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("keydown", handleInteraction)
      document.removeEventListener("touchstart", handleInteraction)
      if (audioNode) {
        audioNode.pause();
      }
    }
  }, [hasInteracted, isLandingPage])

  if (!isLandingPage) {
    return null
  }

  return (
    <audio
      ref={audioRef}
      src='/assets/budayana/music/Into the Wild.mp3'
      loop
      muted
    />
  )
}
