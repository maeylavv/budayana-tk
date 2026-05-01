import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Lock, Play, Check, Star } from 'lucide-react';
import './QuizIslandPage.css';

// Static Data definitions
const TOPICS = [
  { id: 'rumah', title: 'Rumah Adat', icon: '🏠', totalXp: 300, color: '#ffb3c6' },
  { id: 'makanan', title: 'Makanan Tradisional', icon: '🍛', totalXp: 300, color: '#97d2ec' },
  { id: 'tarian', title: 'Tarian & Alat Musik', icon: '🎭', totalXp: 300, color: '#a7e4c0' }
];

export default function QuizIslandPage() {
  const navigate = useNavigate();
  const { islandSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [entryPopup, setEntryPopup] = useState(null);

  // Initialize from Local Storage defensively
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(`budayana_progress_${islandSlug}`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error('Failed to parse saved progress', err);
      }
    }
    return {
      rumah: { 1: 'unlocked', 2: 'locked', 3: 'locked' },
      makanan: { 1: 'unlocked', 2: 'locked', 3: 'locked' },
      tarian: { 1: 'unlocked', 2: 'locked', 3: 'locked' }
    };
  });

  // Sync to local storage continuously on any progress validation shift
  useEffect(() => {
    localStorage.setItem(`budayana_progress_${islandSlug}`, JSON.stringify(progress));
  }, [progress, islandSlug]);

  useEffect(() => {
    const completedTopic = searchParams.get('completedTopic');
    const completedLevel = parseInt(searchParams.get('completedLevel'), 10);
    if (completedTopic && completedLevel) {
      setTimeout(() => {
        setProgress(prev => {
          const topicProgress = prev[completedTopic];
          if (!topicProgress) return prev;
          const newProgress = { ...topicProgress, [completedLevel]: 'completed' };
          if (completedLevel + 1 <= 3 && newProgress[completedLevel + 1] !== 'completed') {
             newProgress[completedLevel + 1] = 'unlocked';
          }
          return { ...prev, [completedTopic]: newProgress };
        });
        // Clear out the query string to prevent looping if reloaded
        setSearchParams({}, { replace: true });
      }, 0);
    }
  }, [searchParams, setSearchParams]);

  const handleLevelClick = (topicId, levelId) => {
    setProgress((prev) => {
      const topicProgress = prev[topicId];
      if (topicProgress[levelId] === 'locked') return prev; // Cannot play locked levels, but completed is actively allowed!

      setEntryPopup({ topicId, levelId });
      return prev;
    });
  };

  const closeEntryPopup = () => setEntryPopup(null);

  const startQuiz = () => {
    navigate(`/islands/${islandSlug}/quiz/${entryPopup.topicId}/${entryPopup.levelId}`);
  };

  // Convert "sumatra" slug back to Title Case conventionally if we don't fetch full object
  const formatIslandName = (slug) => {
    if (!slug) return '';
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  };

  const islandEmojis = {
    sumatra: '🌴',
    jawa: '🌋',
    kalimantan: '🐒',
    sulawesi: '🏖️',
    bali: '🌺',
    nusa: '🐉',
    maluku: '⛵',
    papua: '🦜'
  };
  const emoji = islandEmojis[islandSlug] || '🌴';

  return (
    <div className='quiz-detail-page'>
      {/* Header */}
      <div className='quiz-detail-header'>
        <button className='quiz-back-btn' onClick={() => navigate('/quiz')}>
          <ChevronLeft size={28} color="#000" />
        </button>
        
        <h1 className='quiz-detail-title'>
          {emoji} {formatIslandName(islandSlug)}
        </h1>
        <div style={{ width: '48px' }}></div> {/* Spacer to center the title */}
      </div>

      {/* Notification Banner */}
      <div className='quiz-notif-banner'>
        <div className='quiz-notif-icon'>
          ⭐
        </div>
        <p className='quiz-notif-text'>
          Mulai dari Level 1 dulu ya! Level selanjutnya akan terbuka setelah kamu menyelesaikan level sebelumnya.
        </p>
      </div>

      {/* Scrollable Container for Topics */}
      <div className='quiz-topics-container'>
        {TOPICS.map((topic) => (
          <TopicCard 
            key={topic.id} 
            topic={topic} 
            progressMap={progress[topic.id]} 
            onLevelClick={(levelId) => handleLevelClick(topic.id, levelId)} 
          />
        ))}
      </div>

      {/* Mascot Element */}
      <img src="/assets/budayana/islands/Bocah1 1.png" alt="Mascot" className="quiz-mascot" onError={(e) => e.target.style.display='none'} />

      {/* Quiz Entry Popup */}
      {entryPopup && (
        <div className='popup-overlay' onClick={closeEntryPopup} style={{zIndex: 9999, backgroundColor: 'rgba(253, 245, 230, 0.95)'}}>
          <div className='quiz-welcome-popup' onClick={(e) => e.stopPropagation()} style={{maxWidth: '400px', backgroundColor: '#fdf5e6', border: '5px solid #51423c', borderRadius: '40px', padding: '40px 30px', position: 'relative', marginTop: '60px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Mascot positioned overflowing the top organically like the success views */}
              <img src="/assets/budayana/islands/Buaya.png" style={{height: '150px', position: 'absolute', top: '-50px', objectFit: 'contain'}} alt="character" onError={e => e.target.style.display='none'} />
              
              <h2 className='welcome-title' style={{fontSize: '2.2rem', textAlign: 'center', fontFamily: "'Fredoka', sans-serif", color: '#51423c', margin: '80px 0 5px 0', lineHeight: '1.2'}}>
                {TOPICS.find(t => t.id === entryPopup.topicId)?.title || ''}
              </h2>
              
              <p style={{fontFamily: 'Fredoka, sans-serif', fontSize: '1.1rem', fontWeight: '700', color: '#a4a4a4', margin: '0 0 25px 0'}}>
                Level {entryPopup.levelId}
              </p>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#ffefcd', color: '#ffa500', padding: '10px 24px', borderRadius: '30px', border: '2px solid #ffbe1a', fontSize: '1.2rem', fontFamily: "'Fredoka', sans-serif", marginBottom: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                ⭐ +100 XP
              </div>
              
              <button 
                className='quiz-action-btn' 
                onClick={startQuiz}
                style={{ 
                  backgroundColor: '#ffaa00', 
                  color: '#fff', 
                  border: 'none', 
                  boxShadow: '0 5px 0px #d99100', 
                  width: '100%', 
                  padding: '16px', 
                  borderRadius: '30px', 
                  fontSize: '1.4rem',
                  fontFamily: 'Fredoka, sans-serif',
                  fontWeight: '700'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(5px)'; e.currentTarget.style.boxShadow = 'none'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 5px 0px #d99100'; }}
              >
                Mulai!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Nested Components
function TopicCard({ topic, progressMap, onLevelClick }) {
  // Count how many are completed to highlight stars
  const completedCount = [1, 2, 3].reduce((acc, lvl) => acc + (progressMap[lvl] === 'completed' ? 1 : 0), 0);

  return (
    <div className='quiz-topic-card'>
      <div className='quiz-topic-header'>
        <div className='quiz-topic-icon' style={{ backgroundColor: topic.color }}>
          {topic.icon}
        </div>
        <div className='quiz-topic-info'>
          <h3>{topic.title}</h3>
          <p>3 Level - {topic.totalXp} XP</p>
        </div>
      </div>

      {/* Progress Stars Line */}
      <div className='quiz-topic-stars-container'>
        <div className='quiz-topic-line'></div>
        <div className='quiz-topic-stars'>
          {[1, 2, 3].map((starIndex) => {
            const isFilled = starIndex <= completedCount;
            return (
              <div key={starIndex} className={`quiz-star-wrapper ${isFilled ? 'star-filled' : 'star-empty'}`}>
                <Star size={32} fill={isFilled ? '#ffcc00' : '#e0e0e0'} color={isFilled ? '#ffcc00' : '#e0e0e0'} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Level List */}
      <div className='quiz-topic-levels'>
        {[1, 2, 3].map((levelId) => (
          <LevelItem 
            key={levelId} 
            levelNumber={levelId} 
            status={progressMap[levelId]} 
            onClick={() => onLevelClick(levelId)} 
          />
        ))}
      </div>
    </div>
  );
}

function LevelItem({ levelNumber, status, onClick }) {
  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';
  const isUnlocked = status === 'unlocked';

  let IconComponent = null;
  let iconColor = "";

  if (isLocked) {
    IconComponent = Lock;
    iconColor = "#a3a3a3";
  } else if (isCompleted) {
    IconComponent = Check;
    iconColor = "#fff";
  } else {
    IconComponent = Play;
    iconColor = "#6ea5e0"; 
  }

  return (
    <div 
      className={`quiz-level-item ${status}`} 
      onClick={isLocked ? undefined : onClick}
    >
      <div className={`quiz-level-icon-wrapper ${status}`}>
        <IconComponent size={20} color={iconColor} strokeWidth={3} fill={isUnlocked ? '#6ea5e0' : 'none'} />
      </div>
      
      <div className='quiz-level-label'>
        Level {levelNumber}
      </div>

      <div className={`quiz-level-xp ${status}`}>
        100 XP
      </div>
    </div>
  );
}
