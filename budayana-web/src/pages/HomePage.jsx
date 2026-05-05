import React, { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAttempts } from "../hooks/useAttempts"
import { getIslandBySlug } from "../data/islands"

const islandData = [
  {
    id: "sumatra",
    name: "Sumatra",
    top: "46%",
    left: "14%",
    img: "/assets/budayana/islands/Sumatra.png",
    unlocked: true,
    completed: true,
  },
  {
    id: "kalimantan",
    name: "Kalimantan",
    top: "40%",
    left: "42%",
    img: "/assets/budayana/islands/Kalimantan.png",
    unlocked: true,
    completed: false,
  },
  {
    id: "sulawesi",
    name: "Sulawesi",
    top: "47%",
    left: "60%",
    img: "/assets/budayana/islands/Sulawesi.png",
    unlocked: true,
    completed: false,
  },
  {
    id: "maluku",
    name: "Maluku",
    top: "55%",
    left: "68%",
    img: "/assets/budayana/islands/Maluku.png",
    unlocked: false,
    completed: false,
    scale: 0.82,
  },
  {
    id: "papua",
    name: "Papua",
    top: "52%",
    left: "78%",
    img: "/assets/budayana/islands/Papua.png",
    unlocked: true,
    completed: false,
  },
  {
    id: "bali",
    name: "Bali",
    top: "62%",
    left: "51%",
    img: "/assets/budayana/islands/Bali.png",
    unlocked: false,
    completed: false,
    scale: 0.78,
  },
  {
    id: "jawa",
    name: "Jawa",
    top: "60%",
    left: "32%",
    img: "/assets/budayana/islands/Jawa.png",
    unlocked: true,
    completed: false,
    scale: 1.15,
  },
  {
    id: "nusa-tenggara",
    name: "Nusa Tenggara",
    top: "66%",
    left: "57%",
    img: "/assets/budayana/islands/Nusa Tenggara.png",
    unlocked: false,
    completed: false,
  },
]


const IslandMarker = ({ island, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(island)}
      className='absolute transform -translate-x-1/2 -translate-y-1/2 z-10'
      style={{
        top: island.top,
        left: island.left,
        transform: `translate(-50%, -50%) scale(${island.scale || 1})`,
        transformOrigin: "center center",
      }}
    >
      <img
        src={island.img}
        alt={island.name}
        className='w-36 md:w-40 lg:w-44 drop-shadow-[0_6px_12px_rgba(0,0,0,0.18)]'
      />
      {!island.unlocked && (
        <img
          src='/assets/budayana/locks/locked.png'
          alt='locked'
          className='w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg'
        />
      )}
    </button>
  )
}

const HomePage = () => {
  const navigate = useNavigate()
  const [selectedIsland, setSelectedIsland] = useState(null)

  // Use attempts hook for the selected island
  const { data: attempts } = useAttempts(selectedIsland?.id)
  const attemptCount = attempts?.length || 0

  const islandDetail = selectedIsland ? getIslandBySlug(selectedIsland.id) : null
  const storyTitle = islandDetail ? islandDetail.storyTitle : "Cerita"

  // Track per-island stage progress (1=pretest unlocked, 2=story unlocked, 3=posttest unlocked)
  const [progressByIsland, setProgressByIsland] = useState(() =>
    islandData.reduce((acc, isl) => ({ ...acc, [isl.id]: 1 }), {})
  )

  const summary = useMemo(() => {
    const unlocked = islandData.filter((i) => i.unlocked)
    const completed = unlocked.filter((i) => i.completed)
    return { completed: completed.length, total: unlocked.length }
  }, [])

  const handleStageClick = (key) => {
    if (!selectedIsland) return
    if (key === "story" && !["jawa", "papua"].includes(selectedIsland.id)) {
      alert(
        "Cerita rakyat statis saat ini hanya tersedia untuk Pulau Jawa dan Papua."
      )
      return
    }

    if (key === "pretest") {
      navigate(`/pre-test?island=${selectedIsland.id}`)
    } else if (key === "story") {
      if (selectedIsland.id === "sulawesi") {
        navigate(`/sulawesi-game`)
      } else {
        navigate(`/cerita-rakyat?island=${selectedIsland.id}`)
      }
    } else if (key === "posttest") {
      navigate(`/post-test?island=${selectedIsland.id}`)
    }

    // Simulate completion: when a stage is clicked, unlock the next stage.
    setProgressByIsland((prev) => {
      const current = prev[selectedIsland.id] || 1
      const next = Math.min(3, current + 1)
      return { ...prev, [selectedIsland.id]: next }
    })
  }


  return (
    <div
      className='relative min-h-screen overflow-hidden'
      style={{ backgroundColor: "#99DBF0" }}
    >
      {/* Background water texture could go here */}

      {/* Top HUD */}
      <div className='absolute top-6 left-6'>
        <div
          className='text-[#a2541f] font-extrabold text-2xl drop-shadow-sm'
          style={{ textShadow: "0 0 2px #fff, 0 0 4px #fff" }}
        >
          Cerita Selesai :
        </div>
        <div
          className='text-[#a2541f] font-extrabold text-3xl drop-shadow-sm text-center'
          style={{ textShadow: "0 0 2px #fff, 0 0 4px #fff" }}
        >
          {summary.completed}/{summary.total}
        </div>
      </div>

      <div className='absolute top-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none'>
        <img
          src='/assets/budayana/islands/budayana.png'
          alt='Budayana'
          className='w-64 md:w-72 lg:w-80'
        />
      </div>

      <button className='absolute top-6 right-6 rounded-full border-2 border-[#c3874b] bg-[#fdf0dd] shadow px-2 py-2'>
        <img
          src='/assets/budayana/islands/Profile.png'
          alt='Profile'
          className='w-12 h-12 rounded-full object-cover'
        />
      </button>

      {/* Mascot */}
      <img
        src='/assets/budayana/islands/Bocah1 1.png'
        alt='Mascot'
        className='absolute bottom-6 left-4 w-44 md:w-52 drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]'
      />

      {/* Map Container */}
      <div className='relative mx-auto mt-24 mb-10 w-[95%] max-w-6xl aspect-16/10 bg-transparent z-0'>
        <img
          src='/assets/budayana/islands/Homepage (3).png'
          alt='Map Background'
          className='absolute inset-0 w-full h-full object-contain pointer-events-none z-0'
        />

        {islandData.map((island) => (
          <IslandMarker
            key={island.id}
            island={island}
            onSelect={setSelectedIsland}
          />
        ))}
      </div>

      {/* Modal for stories */}
      {selectedIsland && (
        <div className='fixed inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center px-4 z-50'>
          <div className='w-full max-w-2xl bg-[#fdf6e3] rounded-[24px] shadow-2xl relative px-6 py-8 md:px-12 md:py-10 border border-[#f2ebd4]'>
            {/* Top Bar for Modal */}
            <div className='flex items-center justify-between mb-6'>
              <div className='text-lg md:text-xl font-bold text-black'>
                Percobaan : {attemptCount}
              </div>
              <div className='text-center text-3xl md:text-4xl font-extrabold text-[#000000] absolute left-1/2 -translate-x-1/2'>
                {selectedIsland.name}
              </div>
              <button
                className='text-black relative w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-transparent transition-transform hover:scale-110 active:scale-95 z-10'
                onClick={() => setSelectedIsland(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Central Card content */}
            <div className='flex flex-col items-center justify-center bg-[#A4Bcf0] rounded-[20px] p-6 lg:p-8 mt-10 sm:mt-16 sm:w-[500px] mx-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)]'>
              <div className='text-center text-white text-[22px] md:text-[28px] font-extrabold leading-snug mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' style={{ fontFamily: "Comic Sans MS, sans-serif" }}>
                Cerita Rakyat Interaktif<br />{storyTitle}
              </div>

              <button
                onClick={() => handleStageClick("story")}
                className='bg-[#eebe40] hover:bg-[#d8a82d] text-white font-bold py-2.5 px-8 rounded-full shadow-lg text-lg md:text-xl flex items-center justify-center mb-6 transition-transform hover:-translate-y-1 active:scale-95 border-2 border-transparent'
              >
                Mulai <span className='ml-2 text-xl md:text-2xl font-black'>▶</span>
              </button>

              <img
                src='/assets/budayana/islands/story stage 2 (1).png'
                alt='Crocodile Mascot reading book'
                className='w-32 md:w-40 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
