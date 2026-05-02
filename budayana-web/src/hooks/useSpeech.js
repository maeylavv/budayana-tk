import { useRef, useEffect, useCallback } from "react"

/**
 * useSpeech — Hook for Web Speech API text-to-speech narration
 *
 * Usage:
 *   const { speak, cancel, isSupported } = useSpeech()
 *   speak("Teks narasi ini akan dibacakan")
 *   cancel() // stops speech immediately
 *
 * Settings: lang='id-ID', rate=0.8, pitch=1.0
 *
 * Rules:
 * - Cancels previous utterance before speaking new text
 * - Calls speechSynthesis.cancel() on unmount
 * - Gracefully handles unsupported browsers (isSupported: false)
 * - No errors thrown to UI
 */
export function useSpeech() {
  const isSupported = typeof window !== "undefined" && "speechSynthesis" in window
  const utteranceRef = useRef(null)

  // Cleanup: cancel speech on unmount
  useEffect(() => {
    return () => {
      if (isSupported) {
        try {
          window.speechSynthesis.cancel()
        } catch {
          // Silently ignore
        }
      }
    }
  }, [isSupported])

  const cancel = useCallback(() => {
    if (!isSupported) return
    try {
      window.speechSynthesis.cancel()
      utteranceRef.current = null
    } catch {
      // Silently ignore
    }
  }, [isSupported])

  const speak = useCallback((text) => {
    if (!isSupported || !text) return

    try {
      // Cancel any current speech first
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "id-ID"
      utterance.rate = 0.8
      utterance.pitch = 1.0
      utterance.volume = 1.0

      utteranceRef.current = utterance
      window.speechSynthesis.speak(utterance)
    } catch {
      // Silently ignore unsupported environments or errors
    }
  }, [isSupported])

  return { speak, cancel, isSupported }
}
