import React from 'react';
import { ChevronLeft, Check, BookOpen, Heart } from 'lucide-react';

export default function ProgressBar({ currentQuestionIndex, totalQuestions, hearts, gameState, onBack, levelId }) {
  return (
    <div className='gameplay-header-container'>
      <div className='gameplay-level-subtitle'>Level {levelId || '1'} - Misi Detektif</div>
      <div className='gameplay-header'>
        <button className='quiz-back-btn' onClick={onBack}>
          <ChevronLeft size={24} color="#000" />
        </button>

        <div className='tracker-timeline'>
          <div className='timeline-node-wrapper'>
            <div className={`timeline-node ${gameState === 'literacy' ? 'active' : 'completed'}`}>
              <BookOpen size={16} strokeWidth={3} />
            </div>
          </div>

          {Array.from({ length: totalQuestions }).map((_, idx) => {
            let nodeClass = 'upcoming';
            if (gameState === 'literacy') {
              nodeClass = 'upcoming';
            } else {
              if (idx < currentQuestionIndex) nodeClass = 'completed';
              else if (idx === currentQuestionIndex && gameState !== 'success') nodeClass = 'active';
              else if (gameState === 'success') nodeClass = 'completed';
            }

            return (
              <React.Fragment key={idx}>
                <div className='timeline-line'></div>
                <div className='timeline-node-wrapper'>
                  <div className={`timeline-node ${nodeClass}`}>
                    {nodeClass === 'completed' ? <Check size={16} strokeWidth={4} /> : idx + 1}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className='hearts-display'>
          <Heart size={28} fill="red" color="red" />
          <span className='hearts-text'>{hearts}</span>
        </div>
      </div>
    </div>
  );
}
