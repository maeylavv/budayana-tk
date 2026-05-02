import { useState, useMemo, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./Home.css"
import { Check } from 'lucide-react'
import { useAttempts } from "../hooks/useAttempts"
import { useIsland } from "../hooks/useIslands"
import { islands as staticIslands } from "../data/islands"

// Components
import MapUI from "../components/MapUI"

// Helper to see if we need special slug handling
function getIslandSlug(name) {
  const lower = name.toLowerCase()
  if (lower === "nusa tenggara") return "nusa"
  return lower
}

function ProgressDots({ completed = 0, total = 3 }) {
  return (
    <div className='progress-dots'>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`dot ${i < completed ? "dot-active" : "dot-inactive"}`}
        />
      ))}
    </div>
  )
}

// Stage Card Component with navigation
function StageCard({ stage, status, index, onClick, attempts }) {
  const isLocked = status === "locked"
  const isCompleted = status === "completed"

  /* Logic for XP Label */
  const { label, value } = useMemo(() => {
    if (!attempts || !stage.id) return { label: null, value: null }

    // Find latest finished attempt for this stage
    const stageAttempts = attempts.filter(
      (a) => (a.storyId === stage.id || a.story?.id === stage.id) && a.finishedAt
    )
    if (stageAttempts.length === 0) return { label: null, value: null }

    // Sort by finishedAt desc
    const latest = stageAttempts.sort(
      (a, b) => new Date(b.finishedAt) - new Date(a.finishedAt)
    )[0]

    // Show XP for all stages
    let xp = latest.totalXpGained
    if (!xp && (stage.apiStageType === "STATIC" || !stage.apiStageType)) {
      xp = 100
    }

    return {
      label: "XP Terakhir",
      value: xp !== undefined && xp !== null ? xp : 0
    }
  }, [attempts, stage])

  return (
    <div
      className={`stage-card ${isLocked ? "locked" : ""} ${isCompleted ? "completed" : ""
        }`}
      onClick={!isLocked ? onClick : undefined}
      style={{ cursor: isLocked ? "not-allowed" : "pointer" }}
    >
      <img
        src={`/assets/budayana/islands/tahap ${(index % 3) + 1}.png`}
        className='stage-bg'
        alt={stage.title}
      />

      <div className='stage-content'>
        <p className='stage-title'>{stage.title}</p>
        <div className={`stage-order tahap-${index + 1}`}>
          Tahap {index + 1}
        </div>
        {isCompleted && (
          <div className='stage-check'>
            <Check size={18} strokeWidth={3} color='#ffffff' />
          </div>
        )}
        {status === "resume" && (
          <button className='resume-btn'>Lanjutkan</button>
        )}
      </div>
      {value !== null && label && (
        <div className='stage-score-badge'>
          {label}: {value}
        </div>
      )}

      {isLocked && (
        <div className='stage-lock-overlay'>
          <img
            src='/assets/budayana/islands/padlock.png'
            className='stage-lock-icon'
            alt='locked'
          />
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeIsland, setActiveIsland] = useState(null)

  // In Kids version — all islands are always unlocked
  const allIslands = useMemo(() => {
    return staticIslands.map((staticIsland) => ({
      ...staticIsland,
      isUnlocked: true,   // Always unlocked in Kids version
      isCompleted: false, // Completion tracked per-session via attempts
      apiIslandId: null,  // Will be resolved when popup opens
    }))
  }, [])

  // Auto-open island popup from URL param (only on initial load)
  useEffect(() => {
    const islandParam = searchParams.get("island")
    if (islandParam && allIslands.length > 0 && !activeIsland) {
      const matchedIsland = allIslands.find(
        (i) => i.slug === islandParam || i.id === islandParam
      )
      if (matchedIsland) {
        setTimeout(() => setActiveIsland(matchedIsland), 0)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allIslands])

  // Handle island popup open/close with URL sync
  const handleOpenIsland = (island) => {
    setActiveIsland(island)
    setSearchParams({ island: island.slug }, { replace: true })
  }

  const handleCloseIsland = () => {
    setActiveIsland(null)
    setSearchParams({}, { replace: true })
  }

  const goToProfile = () => navigate("/profile")

  return (
    <div className='page home-page'>
      {/* HEADER */}
      <div className='header'>
        <div style={{ zIndex: 10 }}>
          {/* ToggleMenu removed — Kids version has no Quiz Kultur */}
          <div className='kids-mode-badge'>🏫 Cerita Rakyat</div>
        </div>

        <div className='gameName'>
          <img src='/assets/budayana/islands/Game Name.png' alt='Budayana' />
        </div>

        <div className='profile' onClick={goToProfile}>
          <img src='/assets/budayana/islands/Profile.png' alt='Profil' />
        </div>
      </div>

      {/* MAP ISLANDS */}
      <MapUI allIslands={allIslands} onIslandClick={handleOpenIsland} />

      {/* POPUP */}
      {activeIsland && (
        <IslandPopup activeIsland={activeIsland} onClose={handleCloseIsland} />
      )}
    </div>
  )
}

function IslandPopup({ activeIsland, onClose }) {
  const navigate = useNavigate()
  // Fetch dynamic island details including stories
  const { data: islandDetails, isLoading: isIslandLoading } = useIsland(
    activeIsland.slug
  )

  // Fetch attempts for this island
  const { data: attempts } = useAttempts(
    islandDetails?.id
  )

  const handleStageClick = (stage) => {
    navigate(stage.route)
  }

  // Helper to map API stories to stage cards
  // Kids version: ALL stories route to GamePage regardless of storyType
  const getDynamicStages = (stories, islandSlug) => {
    if (!stories) return []

    return stories.map((story, index) => {
      // All stories go to the GamePage (gamification format)
      const route = `/islands/${islandSlug}/story/${story.id}/game`

      return {
        id: story.id,
        key: story.id,
        title: story.title,
        route: route,
        apiStageType: story.storyType,
        order: story.order || index + 1,
      }
    })
  }

  const stages = useMemo(() => {
    if (!islandDetails?.stories) return []
    return getDynamicStages(
      islandDetails.stories,
      activeIsland.slug || activeIsland.id
    )
  }, [islandDetails, activeIsland])

  // Kids version: All stages always unlocked — no sequential gating
  const getStageStatus = (stageId) => {
    const attemptItems = attempts?.items || []
    const isFinished = attemptItems.some(
      (a) => String(a.storyId) === String(stageId) && a.finishedAt !== null
    )
    const isStarted = attemptItems.some(
      (a) => String(a.storyId) === String(stageId)
    )

    if (isFinished) return "completed"
    if (isStarted) return "resume"
    return "unlocked" // Always unlocked in Kids version
  }

  // Count completed stages for progress dots
  const completedCount = useMemo(() => {
    const attemptItems = attempts?.items || []
    return stages.filter((s) =>
      attemptItems.some(
        (a) => String(a.storyId) === String(s.id) && a.finishedAt !== null
      )
    ).length
  }, [stages, attempts])

  const isLoading = isIslandLoading

  return (
    <div className='popup-overlay' onClick={onClose}>
      <div
        className='popup popup-unlocked'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='unlockedpopup'>
          {/* Close button */}
          <button className='popup-close' onClick={onClose}>
            <img
              src='/assets/budayana/islands/close button.png'
              className='close-button'
              alt='close'
            />
          </button>

          {/* Title */}
          <h2 className='popup-title'>{activeIsland.name}</h2>
          <ProgressDots
            completed={completedCount}
            total={stages.length || 1}
          />

          {/* Loading state */}
          {isLoading && <div className='loading-text'>Memuat cerita...</div>}

          {/* Stage Grid */}
          {!isLoading && (
            <div className='stage-grid'>
              {stages.map((stage, index) => {
                const status = getStageStatus(stage.id)
                return (
                  <StageCard
                    key={stage.key}
                    stage={stage}
                    status={status}
                    index={index}
                    attempts={attempts?.items}
                    onClick={() => handleStageClick(stage)}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
