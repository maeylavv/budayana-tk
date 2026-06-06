
import { useEffect, useState } from "react"
import { useResults } from "../hooks/useResults"
import { islands } from "../data/islands"
import { islandsApi } from "../lib/api"
import "./Results.css"

const STORY_MAPPING = {
  "nenek pakande": {
    fullTitle: "Nenek Pakande",
    island: "Sulawesi"
  },
  "malin kundang": {
    fullTitle: "Malin Kundang",
    island: "Sumatra"
  },
  "roro jonggrang": {
    fullTitle: "Roro Jonggrang",
    island: "Jawa"
  },
  "biwar": {
    fullTitle: "Biwar Penakluk Naga",
    island: "Papua"
  },
  "biwar penakluk naga": {
    fullTitle: "Biwar Penakluk Naga",
    island: "Papua"
  },
  "pesut mahakam": {
    fullTitle: "Pesut Makaham",
    island: "Kalimantan"
  },
  "pesut makaham": {
    fullTitle: "Pesut Makaham",
    island: "Kalimantan"
  },
  "telaga biru": {
    fullTitle: "Legenda Telaga Biru",
    island: "Maluku"
  },
  "legenda telaga biru": {
    fullTitle: "Legenda Telaga Biru",
    island: "Maluku"
  },
  "bawang dan kesuna": {
    fullTitle: "Bawang dan Kesuna",
    island: "Bali"
  },
  "kesuna dan bawang": {
    fullTitle: "Bawang dan Kesuna",
    island: "Bali"
  },
  "watu maladong": {
    fullTitle: "Watu Maladong",
    island: "Nusa Tenggara"
  }
}

export default function Results() {
  const { stats, attempts, isLoading } = useResults()
  // Show loading only while data hasn't arrived yet — no minimum timer
  // so the page never stays stuck.
  const showLoading = isLoading && !stats
  const [storyIslandMap, setStoryIslandMap] = useState({})

  // Fetch all islands to build a StoryID -> IslandName map
  useEffect(() => {
    const fetchAllIslands = async () => {
      try {
        const promises = islands.map((island) =>
          islandsApi.getIsland(island.slug).catch(() => null)
        )
        const results = await Promise.all(promises)

        const newMap = {}
        results.forEach((islandData) => {
          if (islandData && islandData.stories) {
            islandData.stories.forEach((story) => {
              newMap[story.id] = islandData.name
            })
          }
        })
        setStoryIslandMap(newMap)
      } catch (error) {
        console.error("Failed to fetch island details for mapping", error)
      }
    }

    fetchAllIslands()
  }, [])

  const formatDate = (dateString) => {
    if (!dateString) return "-"
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const formatDuration = (seconds) => {
    if (seconds === undefined || seconds === null) return "-"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${String(mins).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`
  }

  // Helper to get island name
  const getIslandName = (attempt) => {
    const title = attempt.story?.title || ""
    const mapped = STORY_MAPPING[title.toLowerCase()]
    if (mapped) return mapped.island

    // 0. Try map from storyId
    const storyId = attempt.storyId || attempt.story?.id
    if (storyId && storyIslandMap[storyId]) {
      return storyIslandMap[storyId]
    }

    // 1. Try to find by islandId in story
    if (attempt.story?.islandId) {
      const island = islands.find((i) => i.id === attempt.story.islandId)
      if (island) return island.name
    }

    // 2. Try to match story title to island configuration
    const islandByStory = islands.find(
      (i) => i.storyTitle.toLowerCase() === title.toLowerCase()
    )
    if (islandByStory) return islandByStory.name

    // 3. Last filtered fallback
    const lowerTitle = title.toLowerCase()
    const islandByName = islands.find(i => lowerTitle.includes(i.name.toLowerCase()))
    if (islandByName) return islandByName.name

    return ""
  }

  const getDisplayTitle = (attempt) => {
    const rawTitle = attempt.story?.title || "Unknown Story"
    const mapped = STORY_MAPPING[rawTitle.toLowerCase()]
    if (mapped) return mapped.fullTitle

    // Get island name from API data
    let islandName = ""
    if (attempt.story?.island?.islandName) {
      islandName = attempt.story.island.islandName
    } else {
      islandName = getIslandName(attempt)
    }

    const suffix = islandName ? ` ${islandName}` : ""

    if (islandName && rawTitle.toLowerCase().includes(islandName.toLowerCase())) {
      return rawTitle
    }
    return `${rawTitle}${suffix}`
  }



  if (showLoading) {
    return null
  }


  return (
    <div className='results-container'>
      {/* Statistics Section */}
      <section>
        <h2 className='results-section-title'>Statistik</h2>
        <div className='stats-grid stats-grid-kids'>
          <div className='stat-card green'>
            <div className='stat-value'>{stats?.storiesCompleted || 0}</div>
            <div className='stat-label'>Cerita Selesai</div>
          </div>
          <div className='stat-card purple'>
            <div className='stat-value'>{stats?.totalXp || 0}</div>
            <div className='stat-label'>Total XP</div>
          </div>
        </div>
      </section>


      {/* History Section */}
      <section>
        <h2 className='results-section-title'>Riwayat Skor</h2>
        <div className='history-table-container'>
          <div className='history-header history-header-kids'>
            <div>Cerita</div>
            <div>Pulau</div>
            <div>XP</div>
            <div>Tanggal</div>
            <div>Waktu</div>
          </div>
          <div className='history-body'>
            {(() => {
              // Filter: only finished story/game attempts (no tests)
              const filteredAttempts = attempts.filter((attempt) => {
                if (!attempt.finishedAt) return false
                const title = (attempt.story?.title || "").toLowerCase()
                // Exclude any pre/post test entries that might still exist
                if (title.includes("pre-test") || title.includes("post-test")) return false
                return true
              })

              if (filteredAttempts.length === 0) {
                return (
                  <div className='empty-message'>
                    Belum ada riwayat permainan.
                  </div>
                )
              }

              return filteredAttempts.map((attempt) => {
                const rawTitle = attempt.story?.title || "Unknown Story"
                const mapped = STORY_MAPPING[rawTitle.toLowerCase()]
                const displayTitle = mapped ? mapped.fullTitle : rawTitle
                const islandName = getIslandName(attempt)


                // Display XP
                let displayXp = attempt.totalXpGained || 0
                if (displayXp === 0 && attempt.stages && attempt.stages.length > 0) {
                  displayXp = attempt.stages.reduce((sum, s) => sum + (s.xpGained || 0), 0)
                }
                // Fallback for STATIC stories
                const isStaticStory = attempt.story?.storyType === "STATIC" || !attempt.story?.storyType
                if (displayXp === 0 && isStaticStory) {
                  displayXp = 100
                }

                // Calculate duration
                let duration = attempt.totalTimeSeconds
                if (duration === undefined || duration === null) {
                  if (attempt.finishedAt && attempt.startedAt) {
                    duration = (new Date(attempt.finishedAt) - new Date(attempt.startedAt)) / 1000
                  } else {
                    duration = 0
                  }
                }

                return (
                  <div key={attempt.id} className='history-row history-row-kids'>
                    <div>{displayTitle}</div>
                    <div>{islandName || "-"}</div>
                    <div>{displayXp} XP</div>
                    <div>{formatDate(attempt.startedAt)}</div>
                    <div>{formatDuration(duration)}</div>
                  </div>
                )
              })
            })()}
          </div>
        </div>
      </section>
    </div>
  )
}