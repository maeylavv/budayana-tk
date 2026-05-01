import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { QUIZ_DATA } from '../data/quizData';
import QuestionRenderer from '../components/quiz/QuestionRenderer';
import ProgressBar from '../components/quiz/ProgressBar';
import './QuizGameplayPage.css';

export default function QuizGameplayPage() {
  const navigate = useNavigate();
  const { islandSlug, topicId, levelId } = useParams();

  // Define States first to map exactly against React's Hook hierarchy definitions natively
  const [gameState, setGameState] = useState('literacy');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [answers, setAnswers] = useState({}); // Stores user selection attempts locally
  const [showQuitPopup, setShowQuitPopup] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0); // Cumulative wrong answer counter for score
  
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // Load quiz data safely
  const quizConfig = QUIZ_DATA[islandSlug]?.[topicId]?.[levelId];

  // Fallback if data is missing, guaranteeing UI protection independently from Hook bindings
  if (!quizConfig) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Fredoka One' }}>
        <h2>Mohon maaf, konten kuis ini belum tersedia!</h2>
        <button className='quiz-action-btn primary' onClick={() => navigate(-1)}>Kembali</button>
      </div>
    );
  }

  const { literacy, questions } = quizConfig;
  const currentQuestion = questions[currentQuestionIndex];

  // Unified Handler
  const handleUnifiedAnswer = (answerData, isCorrect) => {
    // Ignore double clicks if currently reviewing failure state unconditionally
    if (gameState === 'wrong') return;
  
    const currentQAnswers = answers[currentQuestionIndex] || {};

    if (isCorrect) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: { 
           ...currentQAnswers, 
           isCorrect: true, 
           correctIndex: currentQuestion.type.includes('choice') || currentQuestion.type === 'picture_selection' ? answerData : undefined,
           placements: (!currentQuestion.type.includes('choice') && currentQuestion.type !== 'picture_selection') ? answerData : undefined
        }
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [currentQuestionIndex]: { 
           ...currentQAnswers, 
           wrongIndices: currentQuestion.type.includes('choice') || currentQuestion.type === 'picture_selection' ? [...(currentQAnswers.wrongIndices || []), answerData] : undefined,
           placements: (!currentQuestion.type.includes('choice') && currentQuestion.type !== 'picture_selection') ? answerData : currentQAnswers.placements
        }
      }));

      // Deduct hearts upon error explicitly tracking parameters
      setWrongAttempts(curr => curr + 1);
      setHearts(curr => {
        const newHearts = curr - 1;
        if (newHearts <= 0) {
          setGameState('game_over');
        } else {
          setGameState('wrong');
        }
        return newHearts;
      });
    }
  };

  const handleKembali = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(curr => curr - 1);
    } else {
      // On the first question, go back to literacy mode
      setGameState('literacy');
    }
  };

  const handleSelanjutnya = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(curr => curr + 1);
    } else {
      setEndTime(Date.now());
      setGameState('success');
    }
  };

  const handleRetry = () => {
    // For multiple-choice: clear wrong highlights. For DragDrop: keep placements
    // so the DragDropQuestion useEffect restores locked correct zones.
    setAnswers(prev => {
      const updated = { ...prev };
      if (updated[currentQuestionIndex]) {
        updated[currentQuestionIndex] = {
          ...updated[currentQuestionIndex],
          wrongIndices: [],
          // Keep placements so DragDrop re-locks correct ones and removes wrong ones
        };
      }
      return updated;
    });
    setGameState('question');
  };

  const handleGameOverBack = () => {
    navigate(`/islands/${islandSlug}/quiz`);
  };

  // Helper formatting for Results time
  const getFormattedTime = () => {
    if (!endTime) return "0s";
    const diff = Math.floor((endTime - startTime) / 1000);
    const m = Math.floor(diff / 60);
    const s = diff % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
  };

  const totalXP = questions.reduce((acc, q) => acc + q.xp, 0);

  // Score: total questions minus cumulative wrong attempts, floored at 0
  const score = Math.max(0, questions.length - wrongAttempts);

  const mascotByLevel = {
    '1': '/assets/budayana/islands/Buaya.png',
    '2': '/assets/budayana/islands/Monyet.png',
    '3': '/assets/budayana/islands/Harimau.png',
  };

  return (
    <div className='gameplay-page'>
      {/* Dynamic Header Tracker passed explicitly */}
      <ProgressBar 
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        hearts={hearts}
        gameState={gameState}
        onBack={() => setShowQuitPopup(true)}
        islandSlug={islandSlug}
        levelId={levelId}
      />

      {/* Views */}
      {gameState === 'literacy' && (
        <div className='gameplay-literacy-view'>
          <div className='literacy-image-container'>
            <img src={literacy.image || ' '} alt='Intro' onError={e => e.target.style.display = 'none'} className='literacy-img' />
          </div>
          <div className='literacy-text-container'>
            <p className='literacy-text'>
              {literacy.text}
            </p>
          </div>
          <div className='literacy-action'>
            <button className='quiz-action-btn primary mt-4' onClick={() => setGameState('question')} style={{ marginTop: '2px' }}>
              Lanjut ke Quiz &rarr;
            </button>
          </div>
        </div>
      )}

      {(gameState === 'question' || gameState === 'wrong') && (
        <div className={`gameplay-question-view${levelId === '3' ? ' level-3' : levelId === '2' ? ' level-2' : ''}`}>
          <div className='question-character-bubble'>
            {(() => {
              const mascots = [
                '/assets/budayana/islands/Monyet.png',
                '/assets/budayana/islands/Harimau.png',
                '/assets/budayana/islands/Monyet.png',
                '/assets/budayana/islands/Badak.png',
                '/assets/budayana/islands/Buaya.png',
              ];
              const src = mascots[currentQuestionIndex % mascots.length];
              return <img src={src} alt='Mascot' className='mascot-img' onError={e => e.target.style.display = 'none'} />;
            })()}
            <div className='speech-bubble'>
              {currentQuestion.text}
            </div>
          </div>

          <QuestionRenderer 
            question={currentQuestion}
            answersMapping={answers[currentQuestionIndex] || {}}
            onAnswer={handleUnifiedAnswer}
          />

          {/* Navigation logic placed identically at the bottom under the blue border boundary! */}
          <div className='quiz-nav-buttons'>
            <button 
              className='quiz-nav-btn back-btn' 
              onClick={handleKembali}
            >
              &larr; Kembali
            </button>

            <div style={{ textAlign: 'center', marginTop: '14px' }}>
            <button
              className='quiz-nav-btn back-btn'
              onClick={() => setGameState('literacy')}
              style={{
                background: 'none',
                border: 'none',
                color: '#1b8599',
                fontSize: '1rem',
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: 0,
              }}
            >
              📖 Lihat Bacaan
            </button>
          </div>
            
            <button 
              className='quiz-nav-btn next-btn' 
              onClick={handleSelanjutnya}
              disabled={answers[currentQuestionIndex]?.isCorrect !== true}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Selesai \u2714' : 'Selanjutnya \u2192'}
            </button>
          </div>
          {/* Persistent link to jump back to literacy from any question */}
          
        </div>
      )}

      {/* Wrong answer overlay */}
      {gameState === 'wrong' && (
        <div className='popup-overlay' style={{ zIndex: 999 }}>
          <div className='wrong-feedback-card'>
            <img
              src='/assets/budayana/islands/bocah flip.png'
              alt='Wrong'
              className='wrong-mascot-img'
              onError={e => e.target.style.display = 'none'}
            />
            <p className='feedback-title'>
              Uh oh... jawabannya kurang tepat,<br />ayo coba lagi! Kamu pasti bisa!
            </p>
            <button className='btn-retry-pill' onClick={handleRetry}>
              Siap, coba lagi
            </button>
          </div>
        </div>
      )}

      {/* Game over overlay */}
      {gameState === 'game_over' && (
        <div className='popup-overlay' style={{ zIndex: 999 }}>
          <div className='wrong-feedback-card'>
            <img
              src='/assets/budayana/islands/bocah flip.png'
              alt='Game Over'
              className='wrong-mascot-img'
              onError={e => e.target.style.display = 'none'}
            />
            <p className='feedback-title'>
              Uh oh... nyawa kamu habis!<br />Ayo coba lagi dari awal!
            </p>
            <button className='btn-retry-pill' onClick={handleGameOverBack}>
              Kembali ke Topik
            </button>
          </div>
        </div>
      )}

      {/* Quit confirmation popup */}
      {showQuitPopup && (
        <div className='popup-overlay' style={{ zIndex: 1000 }}>
          <div className='quit-feedback-card'>
            <img
              src='/assets/budayana/islands/image 90.png'
              alt='Quit'
              className='quit-mascot-img'
              onError={e => e.target.style.display = 'none'}
            />
            <p className='quit-title'>
              Jangan pergi dulu! Progresmu di tahap ini<br />akan hilang kalau kamu berhenti sekarang.
            </p>
            <button className='btn-continue-pill' onClick={() => setShowQuitPopup(false)}>
              Lanjutkan Belajar
            </button>
            <button className='btn-quit-link' onClick={() => navigate(`/islands/${islandSlug}/quiz`)}>
              Akhiri Sesi
            </button>
          </div>
        </div>
      )}

      {gameState === 'success' && (
  <div className='popup-overlay success' style={{ zIndex: 999 }}>
    <div className='success-feedback-card'>
      <img 
        src={mascotByLevel[levelId] || '/assets/budayana/islands/Buaya.png'} 
        alt='Mascot' 
        className='mascot-img-success' 
        onError={e => e.target.style.display = 'none'} 
      />      
      {/* Level-based title & subtitle */}
      {levelId === '1' && <>
        <h1 className='success-title'>Pengamat Budaya</h1>
        <p className='success-subtitle'>Hebat! Kamu sudah jadi Pengamat Budaya!</p>
      </>}
      {levelId === '2' && <>
        <h1 className='success-title'>Penjelajah Budaya 🧭</h1>
        <p className='success-subtitle'>Luar biasa! Kamu sekarang seorang penjelajah!</p>
      </>}
      {levelId === '3' && <>
        <h1 className='success-title'>Pakar Budaya 🏆</h1>
        <p className='success-subtitle'>Selamat! Kamu telah menjadi Pakar Budaya!</p>
      </>}

      <div className='success-stats'>
        <div className='stat-box xp-box'>
          <h2>+{totalXP}</h2>
          <p>XP Didapat</p>
        </div>
        <div className='stat-box score-box'>
          <h2>{score}/{questions.length}</h2>
          <p>Skor</p>
        </div>
        <div className='stat-box time-box'>
          <h2>{getFormattedTime()}</h2>
          <p>Waktu</p>
        </div>
      </div>

      <div className='success-actions'>
        <button className='btn-pill-primary' onClick={() => navigate(`/islands/${islandSlug}/quiz?completedTopic=${topicId}&completedLevel=${levelId}`)}>
          ← Kembali ke Topik
        </button>
        <button className='btn-pill-secondary' onClick={() => navigate('/quiz')}>
          🗺️ Peta Pulau
        </button>
      </div>
    </div>
  </div>
)}  
    </div>
  );
}
