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

  // Fetch island data at Home level and pass it to the popup as a prop.
  // The popup renders immediately once data is ready (no loading UI shown).
  const { data: islandDetails, isLoading: isIslandLoading } = useIsland(
    activeIsland?.slug ?? null
  )

  // Only show popup once data has loaded (or is already cached)
  const islandReady = !!activeIsland && (!isIslandLoading || !!islandDetails)

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

      {/* POPUP — rendered as soon as island data is ready */}
      {islandReady && (
        <IslandPopup
          activeIsland={activeIsland}
          islandDetails={islandDetails}
          onClose={handleCloseIsland}
        />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// IslandPopup — receives pre-fetched islandDetails as a prop.
// NO loading state, NO GIF here. All loading is handled by the parent Home.
// ---------------------------------------------------------------------------
function IslandPopup({ activeIsland, islandDetails, onClose }) {
  const navigate = useNavigate()

  // Per-island card colors
  const ISLAND_COLORS = {
    sumatra:       "#A8BFFB",
    jawa:          "#C498DD",
    kalimantan:    "#5AD9AD",
    sulawesi:      "#FFA6C9",
    papua:         "#F6B80F",
    maluku:        "#9ED65D",
    bali:          "#F2E686",
    nusa:          "#F7885E",
  }
  const cardColor = ISLAND_COLORS[activeIsland?.slug] || "#a6baf7"

  // Fetch attempts for this island (fast — uses cached island id)
  const { data: attempts } = useAttempts(islandDetails?.id)

  const handleStageClick = (route) => {
    navigate(route)
  }

  const attemptItems = attempts?.items || []
  const attemptCount = attemptItems.length

  // Force UI to use activeIsland.storyTitle (from islands.js)
  const storyTitle = activeIsland.storyTitle || islandDetails?.stories?.[0]?.title || "Coming Soon"

  // Route to the first story game by default, or just fallback
  const firstStoryId = islandDetails?.stories?.[0]?.id
  const routeToMulai = firstStoryId
    ? `/islands/${activeIsland.slug || activeIsland.id}/story/${firstStoryId}/game?page=1`
    : `/cerita-rakyat?island=${activeIsland.id}`

  return (
    <div className='fixed inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center px-4 z-50' onClick={onClose}>
      <div
        className='w-full max-w-2xl bg-[#fdf6e3] rounded-[24px] shadow-2xl relative px-6 py-8 md:px-12 md:py-10 border border-[#f2ebd4]'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar for Modal */}
        <div className='flex items-center justify-between mb-6'>
          <div className='text-lg md:text-xl font-bold text-black z-10'>
            Percobaan : {attemptCount}
          </div>
          <div className='text-center text-3xl md:text-4xl font-extrabold text-[#000000] absolute left-1/2 -translate-x-1/2 w-full'>
            {activeIsland.name}
          </div>
          <button
            className='text-black relative w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-transparent transition-transform hover:scale-110 active:scale-95 z-10'
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Central Card content — no loading state, data is always ready here */}
        <div
          className='flex flex-col items-center justify-center rounded-[20px] p-6 lg:p-8 mt-10 sm:mt-16 w-full sm:w-[500px] mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
          style={{ backgroundColor: cardColor }}
        >
          <div className='text-center text-white text-[22px] md:text-[28px] font-extrabold leading-snug mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' style={{ fontFamily: "Comic Sans MS, sans-serif" }}>
            Cerita Rakyat Interaktif<br />{storyTitle}
          </div>

          <button
            onClick={() => handleStageClick(routeToMulai)}
            className='bg-[#eebe40] hover:bg-[#d8a82d] text-white font-bold py-2.5 px-8 rounded-full shadow-lg text-lg md:text-xl flex items-center justify-center mb-6 transition-transform hover:-translate-y-1 active:scale-95 border-2 border-transparent'
          >
            Mulai <span className='ml-2 text-xl md:text-2xl font-black'>▶</span>
          </button>

          <img
            src='/assets/budayana/islands/Monyet.png'
            alt='Crocodile Mascot'
            className='w-32 md:w-36 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] mt-2'
          />
        </div>
      </div>
    </div>
  )
}
