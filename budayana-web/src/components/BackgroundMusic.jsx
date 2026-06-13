import { useState, useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useMusic } from "../hooks/useMusic"

/**
 * Background music component with autoplay policy handling
 * Strategy: Persistent mounting, synced with useMusic global hook state
 */
export default function BackgroundMusic() {
  const location = useLocation()
  const audioRef = useRef(null)
  const { isMuted } = useMusic()
  const [hasInteracted, setHasInteracted] = useState(false)

  const isMusicPage = [
    "/",
    "/login",
    "/sign-up",
    "/home"
  ].includes(location.pathname)

  // Sync mute state with audio element directly
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted])

  // Play/Pause handling
  useEffect(() => {
    const audioNode = audioRef.current
    if (!audioNode) return

    if (!isMusicPage) {
      audioNode.pause()
      return
    }

    // Set volume (0.0 - 1.0 range)
    audioNode.volume = 0.3

    const playAudio = () => {
      audioNode.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction")
      })
    }

    if (hasInteracted) {
      if (!isMuted) {
        playAudio()
      } else {
        audioNode.pause()
      }
    } else {
      // Try to play even if not interacted (if browser allows it)
      if (!isMuted) {
        playAudio()
      }
    }

    // Handle user interaction to enable audio
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        if (!isMuted) {
          audioNode.play().catch(() => { })
        }
      }
    }

    document.addEventListener("click", handleInteraction)
    document.addEventListener("keydown", handleInteraction)
    document.addEventListener("touchstart", handleInteraction)

    return () => {
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("keydown", handleInteraction)
      document.removeEventListener("touchstart", handleInteraction)
    }
  }, [hasInteracted, isMusicPage, isMuted])

  return (
    <audio
      ref={audioRef}
      src="/assets/budayana/music/Into the Wild.mp3"
      loop
      muted={isMuted}
      preload="auto"
    />
  )
}

