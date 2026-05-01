import React, { useState, useEffect } from 'react';
import './SentenceArrangementDND.css';

export default function SentenceArrangementDND({ question, answersMapping = {}, onAnswer }) {
  const [placements, setPlacements] = useState(answersMapping.placements || {});
  const [lockedZones, setLockedZones] = useState([]);

  const hasAnsweredFully = answersMapping.isCorrect === true;

  useEffect(() => {
    const freshPlacements = answersMapping.placements || {};
    setPlacements(freshPlacements);

    const computedLocked = [];
    question.dropZones.forEach((z, idx) => {
      if (freshPlacements[z.id] === question.correctOrder[idx]) {
        computedLocked.push(z.id);
      }
    });
    setLockedZones(computedLocked);
  }, [question, answersMapping]);

  const handleDragStart = (e, dragId) => {
    if (hasAnsweredFully) return;
    const placedZone = Object.keys(placements).find(key => placements[key] === dragId);
    if (placedZone && lockedZones.includes(placedZone)) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('dragId', dragId);
  };

  const handleDrop = (e, zoneId) => {
    e.preventDefault();
    if (hasAnsweredFully || lockedZones.includes(zoneId)) return;
    const dragId = e.dataTransfer.getData('dragId');
    if (!dragId) return;

    const newPlacements = { ...placements };
    Object.keys(newPlacements).forEach(key => {
      if (newPlacements[key] === dragId) delete newPlacements[key];
    });
    newPlacements[zoneId] = dragId;
    setPlacements(newPlacements);
  };

  const handleDropToPool = (e) => {
    e.preventDefault();
    if (hasAnsweredFully) return;
    const dragId = e.dataTransfer.getData('dragId');
    if (!dragId) return;

    const newPlacements = { ...placements };
    Object.keys(newPlacements).forEach(key => {
      if (newPlacements[key] === dragId && !lockedZones.includes(key)) {
        delete newPlacements[key];
      }
    });
    setPlacements(newPlacements);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleRemove = (zoneId) => {
    if (hasAnsweredFully || lockedZones.includes(zoneId)) return;
    const newPlacements = { ...placements };
    delete newPlacements[zoneId];
    setPlacements(newPlacements);
  };

  const handlePeriksa = () => {
    if (hasAnsweredFully) return;
    let newLocked = [...lockedZones];
    let newPlacements = { ...placements };

    question.dropZones.forEach((z, idx) => {
      const placedId = placements[z.id];
      if (placedId) {
        if (placedId === question.correctOrder[idx]) {
          if (!newLocked.includes(z.id)) newLocked.push(z.id);
        } else {
          delete newPlacements[z.id];
        }
      }
    });

    setPlacements(newPlacements);
    setLockedZones(newLocked);

    const isAllCorrect = newLocked.length === question.dropZones.length;
    onAnswer(newPlacements, isAllCorrect);
  };

  const placedDragIds = Object.values(placements);
  const remainingDraggables = question.draggables.filter(d => !placedDragIds.includes(d.id));
  const allPlaced = Object.keys(placements).length === question.dropZones.length;

  const btnText = hasAnsweredFully ? 'Jawaban Benar!' : 'Periksa!';
  const btnClass = `sa-periksa-btn${hasAnsweredFully ? ' correct' : ''}`;

  return (
    <div className='sa-container'>

      {/* Header: title left, Periksa button right */}
      <div className='sa-header-row'>
        <h4 className='sa-title'>Urutkan kalimat di bawah ini:</h4>
        <button
          className={btnClass}
          onClick={handlePeriksa}
          disabled={hasAnsweredFully || !allPlaced}
        >
          {btnText}
        </button>
      </div>

      {/* Answer Drop Zones */}
      <div className='sa-zones-row'>
        {question.dropZones.map((z, idx) => {
          const placedDragId = placements[z.id];
          const placedItem = question.draggables.find(d => d.id === placedDragId);
          const isLocked = lockedZones.includes(z.id) || hasAnsweredFully;

          return (
            <div
              key={z.id}
              className={`sa-drop-zone${isLocked && placedItem ? ' locked' : ''}`}
              onDrop={(e) => handleDrop(e, z.id)}
              onDragOver={handleDragOver}
            >
              {placedItem ? (
                <div
                  draggable={!isLocked}
                  onDragStart={(e) => handleDragStart(e, placedItem.id)}
                  className='sa-placed-chip'
                  style={{
                    backgroundColor: isLocked ? '#b5e47a' : (placedItem.color || '#fff'),
                    borderColor: isLocked ? '#5faa1e' : 'transparent',
                    cursor: isLocked ? 'default' : 'grab',
                  }}
                >
                  {!isLocked && (
                    <button
                      className='sa-remove-btn'
                      onClick={(e) => { e.stopPropagation(); handleRemove(z.id); }}
                    >
                      ✕
                    </button>
                  )}
                  <span className='sa-chip-text'>{placedItem.text}</span>
                </div>
              ) : (
                <span className='sa-placeholder'>Letakkan di sini</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Word Pool */}
      <div
        className='sa-pool-section'
        onDrop={handleDropToPool}
        onDragOver={handleDragOver}
      >
        <h4 className='sa-subtitle'>Pilih kalimat:</h4>
        <div className='sa-pool-grid'>
          {remainingDraggables.map(d => (
            <div
              key={d.id}
              draggable={!hasAnsweredFully}
              onDragStart={(e) => handleDragStart(e, d.id)}
              className='sa-draggable'
              style={{ backgroundColor: d.color || '#fff' }}
            >
              {d.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
