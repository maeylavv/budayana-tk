import { useState, useEffect, useRef } from "react"

/**
 * useMinimumLoading
 *
 * Returns `true` while either:
 *  - the actual data is still loading, OR
 *  - the minimum display duration has not yet elapsed.
 *
 * This prevents a "flash" where the loading screen appears for
 * only a fraction of a second, which feels jarring for kids.
 *
 * @param {boolean} isLoading  - The real loading state (from a query / hook)
 * @param {number}  minMs      - Minimum ms to show the loader (default 2000)
 * @returns {boolean}          - Whether the loading screen should be shown
 */
export function useMinimumLoading(isLoading, minMs = 2000) {
  // Track whether the minimum timer has finished
  const [minElapsed, setMinElapsed] = useState(false)

  // Remember if loading has ever started so we don't fire early
  const startedRef = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    // When loading kicks off, start the minimum timer ONCE
    if (isLoading && !startedRef.current) {
      startedRef.current = true
      setMinElapsed(false)

      timerRef.current = setTimeout(() => {
        setMinElapsed(true)
      }, minMs)
    }
    // NOTE: No cleanup here — the timer must be allowed to fire
    // even after isLoading flips to false. Cleanup only on unmount (below).
  }, [isLoading, minMs])

  // Separate effect whose ONLY job is to clear the timer on component unmount.
  // This MUST be separate so it doesn't cancel the timer when isLoading changes.
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  // Before loading has ever started, mirror the raw value directly
  if (!startedRef.current) return isLoading

  // Once started: stay true until BOTH data is ready AND timer has elapsed
  return isLoading || !minElapsed
}
