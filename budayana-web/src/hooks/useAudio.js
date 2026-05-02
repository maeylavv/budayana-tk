import { useRef, useEffect, useCallback } from "react"

/**
 * useAudio — Hook for MP3 sound effect playback
 *
 * Usage:
 *   const { play, stop } = useAudio('/audio/sfx/correct.mp3')
 *   play()  // plays the sound (cancels any previous instance)
 *   stop()  // stops the sound immediately
 *
 * Rules:
 * - Only one Audio instance per hook call
 * - Automatically stops on unmount
 * - Fails silently if file not found or audio unsupported
 */
export function useAudio(src) {
  const audioRef = useRef(null)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current = null
      }
    }
  }, [])

  const stop = useCallback(() => {
    if (audioRef.current) {
      try {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      } catch {
        // Ignore errors
      }
    }
  }, [])

  const play = useCallback(() => {
    // Stop any currently playing instance
    stop()

    try {
      const audio = new Audio(src)
      audioRef.current = audio
      audio.play().catch(() => {
        // Silently ignore: file missing, format unsupported, browser policy etc.
      })
    } catch {
      // Silently ignore unsupported environments
    }
  }, [src, stop])

  return { play, stop }
}
