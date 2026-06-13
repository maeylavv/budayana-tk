import { useState, useEffect, useCallback } from "react"

export function useMusic() {
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("musicMuted") === "true"
  })

  useEffect(() => {
    const handleToggle = () => {
      setIsMuted(localStorage.getItem("musicMuted") === "true")
    }

    window.addEventListener("music-mute-toggle", handleToggle)
    return () => {
      window.removeEventListener("music-mute-toggle", handleToggle)
    }
  }, [])

  const toggle = useCallback(() => {
    const nextMuted = !isMuted
    localStorage.setItem("musicMuted", String(nextMuted))
    window.dispatchEvent(new Event("music-mute-toggle"))
  }, [isMuted])

  return { isMuted, toggle }
}
