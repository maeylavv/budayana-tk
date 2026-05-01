import React, { useState, useEffect } from 'react';
import './OpinionReasonQuestion.css';

export default function OpinionReasonQuestion({ question, answersMapping = {}, onAnswer }) {
  const [selectedOpinion, setSelectedOpinion] = useState(answersMapping.placements?.opinion || null);
  const [selectedReason, setSelectedReason] = useState(answersMapping.placements?.reason || null);
  const [isPeriksaClicked, setIsPeriksaClicked] = useState(answersMapping.isCorrect || false);

  const hasAnsweredFully = answersMapping.isCorrect === true;

  useEffect(() => {
    setSelectedOpinion(answersMapping.placements?.opinion || null);
    setSelectedReason(answersMapping.placements?.reason || null);
    setIsPeriksaClicked(answersMapping.isCorrect || false);
  }, [question, answersMapping]);

  const handleOpinionSelect = (id) => {
    if (hasAnsweredFully) return;
    setSelectedOpinion(id);
    setIsPeriksaClicked(false);
  };

  const handleReasonSelect = (id) => {
    if (hasAnsweredFully) return;
    setSelectedReason(id);
    setIsPeriksaClicked(false);
  };

  const handlePeriksa = () => {
    let isValid = false;
    for (let pair of question.correctPairs) {
      if (pair.opinionId === selectedOpinion && pair.reasonId === selectedReason) {
        isValid = true;
        break;
      }
    }

    setIsPeriksaClicked(true);
    
    // Pass partial state so the user selection is remembered on retry logic if failed!
    onAnswer({ opinion: selectedOpinion, reason: selectedReason }, isValid);
  };

  const isReady = selectedOpinion && selectedReason;

  return (
    <div className='or-container'>
      <div className='or-section'>
        <h4 className='or-title'>Pilih pendapatmu:</h4>
        <div className='or-opinions-grid'>
          {question.opinions.map(op => {
            let btnClass = 'or-opinion-btn';
            if (selectedOpinion === op.id) {
              btnClass += ' selected';
              if (hasAnsweredFully) btnClass += ' correct';
              else if (isPeriksaClicked && !hasAnsweredFully) btnClass += ' wrong';
            }
            
            return (
              <button 
                key={op.id} 
                className={btnClass}
                onClick={() => handleOpinionSelect(op.id)}
                disabled={hasAnsweredFully}
              >
                {op.text}
              </button>
            )
          })}
        </div>
      </div>

      <div className='or-section mt-10'>
        <h4 className='or-title'>Pilih alasanmu:</h4>
        <div className='or-reasons-grid'>
          {question.reasons.map(rs => {
            let btnClass = 'or-reason-btn';
            if (selectedReason === rs.id) {
              btnClass += ' selected';
              if (hasAnsweredFully) btnClass += ' correct';
              else if (isPeriksaClicked && !hasAnsweredFully) btnClass += ' wrong';
            }

            return (
              <button 
                key={rs.id} 
                className={btnClass}
                onClick={() => handleReasonSelect(rs.id)}
                disabled={hasAnsweredFully}
              >
                {rs.text}
              </button>
            )
          })}
        </div>
      </div>

      <div className='or-actions'>
        {isReady && (
          <button 
            className={`or-periksa-btn ${hasAnsweredFully ? 'correct' : (isPeriksaClicked ? 'wrong' : '')}`} 
            onClick={handlePeriksa}
            disabled={hasAnsweredFully}
          >
            {hasAnsweredFully ? 'Jawaban Benar!' : (isPeriksaClicked ? 'Coba Lagi!' : 'Periksa!')}
          </button>
        )}
      </div>
    </div>
  );
}
