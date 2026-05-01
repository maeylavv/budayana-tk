import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./QuizKulturPage.css"
import ToggleMenu from "../components/ToggleMenu"
import MapUI from "../components/MapUI"
import { islands as staticIslands } from "../data/islands"

export default function QuizKulturPage() {
  const navigate = useNavigate()
  const [showWelcome, setShowWelcome] = useState(() => !sessionStorage.getItem('quizWelcomeShown'))
  const [currentStep, setCurrentStep] = useState(1)

  // Use the static islands directly, assuming they are unlocked/open for now
  // Since you mentioned "For now, clicking an island does not need to navigate anywhere yet."
  const allIslands = staticIslands.map((island) => ({
    ...island,
    isUnlocked: true, // We can keep them conceptually unlocked for the quiz
  }))

  const handleOpenIsland = (island) => {
    navigate(`/islands/${island.slug || island.id}/quiz`)
  }

  const goToProfile = () => navigate("/profile")

  return (
    <div className='page quiz-page'>
      {/* HEADER */}
      <div className='header'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', zIndex: 10 }}>
          <ToggleMenu />
          {/* Omit 'Tahap Selesai' for this page or put something relevant later */}
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

      {/* WELCOME POPUP */}
      {showWelcome && (
        <div className='popup-overlay' onClick={() => {
          sessionStorage.setItem('quizWelcomeShown', 'true')
          setShowWelcome(false)
        }}>
          <div
            className='quiz-welcome-popup'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='welcome-title'>
              🗺️ Petualangan Kultur Quiz
            </h2>
            <p className='welcome-subtitle'>
              Jelajahi 8 pulau, 3 topik budaya, dan taklukkan tantangan quiz yang menantimu!
            </p>

            <div className='steps-container'>
              {/* Step 1 */}
              <div className={`step-item ${currentStep === 1 ? 'active-step' : ''}`}>
                <div className='step-circle'>1</div>
                <div className='step-label'>Pilih Pulau</div>
              </div>
              {/* Step 2 */}
              <div className={`step-item ${currentStep === 2 ? 'active-step' : ''}`}>
                <div className='step-circle'>2</div>
                <div className='step-label'>Pilih Topik</div>
              </div>
              {/* Step 3 */}
              <div className={`step-item ${currentStep === 3 ? 'active-step' : ''}`}>
                <div className='step-circle'>3</div>
                <div className='step-label'>Pilih Level</div>
              </div>
            </div>

            <button 
              className='quiz-ok-btn' 
              onClick={() => {
                if (currentStep < 3) {
                  setCurrentStep(prev => prev + 1)
                } else {
                  sessionStorage.setItem('quizWelcomeShown', 'true')
                  setShowWelcome(false)
                }
              }}
            >
              {currentStep < 3 ? 'Lanjut' : 'Oke!'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
