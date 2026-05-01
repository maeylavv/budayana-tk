import React, { useState, useEffect } from 'react';
import './DragDropQuestion.css';

export default function DragDropQuestion({ question, answersMapping = {}, onAnswer }) {
  const [placements, setPlacements] = useState(answersMapping.placements || {});
  const [lockedZones, setLockedZones] = useState([]);
  
  const hasAnsweredFully = answersMapping.isCorrect === true;

  // Sync state if navigation changes question
  useEffect(() => {
    const freshPlacements = answersMapping.placements || {};
    setPlacements(freshPlacements);
    
    // Automatically recompute locked zones from saved valid placements
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
    
    // Safety check against moving locked items out of correct zones
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

    // Remove if dragged from existing zone to shift cleanly
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

    // Delete placement safely dragging back into the left source
    const newPlacements = { ...placements };
    Object.keys(newPlacements).forEach(key => {
      if (newPlacements[key] === dragId && !lockedZones.includes(key)) {
         delete newPlacements[key];
      }
    });
    setPlacements(newPlacements);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemove = (zoneId) => {
    if (hasAnsweredFully || lockedZones.includes(zoneId)) return;
    const newPlacements = { ...placements };
    delete newPlacements[zoneId];
    setPlacements(newPlacements);
  };

  const handlePeriksa = () => {
    let newLocked = [...lockedZones];
    let newPlacements = { ...placements };
    let isAllCorrect = true;

    question.dropZones.forEach((z, idx) => {
      const placedId = placements[z.id];
      if (placedId) {
        if (placedId === question.correctOrder[idx]) {
          if (!newLocked.includes(z.id)) newLocked.push(z.id);
        } else {
          isAllCorrect = false;
          // Kick the failing selection gracefully back to the pool
          delete newPlacements[z.id];
        }
      } else {
         isAllCorrect = false;
      }
    });

    setPlacements(newPlacements);
    setLockedZones(newLocked);

    if (newLocked.length === question.dropZones.length) {
      onAnswer(newPlacements, true);
    } else {
      // Trigger the generic overlay failure state globally
      onAnswer(newPlacements, false);
    }
  };

  const placedDragIds = Object.values(placements);
  const remainingDraggables = question.draggables.filter(d => !placedDragIds.includes(d.id));
  const allPlaced = Object.keys(placements).length === question.dropZones.length;
  // True when this question's draggables use image cards
  const isCardMode = question.draggables.some(d => d.image);

  let btnClass = 'dnd-periksa-btn';
  let btnText = 'Periksa!';
  if (hasAnsweredFully) {
    btnClass += ' correct';
    btnText = 'Jawaban Benar!';
  }

  return (
    <div className='dnd-container'>
      <div className='dnd-boards'>
        {/* Left Board allowing backward drop reception */}
        <div 
          className='dnd-left-board'
          onDrop={handleDropToPool}
          onDragOver={handleDragOver}
        >
          <h4 className='dnd-title'>Tarik ke kanan &rarr;</h4>
          <div className='dnd-pool'>
            {remainingDraggables.map(d => (
              <div 
                key={d.id} 
                draggable={!hasAnsweredFully}
                onDragStart={(e) => handleDragStart(e, d.id)}
                className={`dnd-draggable${d.image ? ' dnd-draggable--card' : ''}`}
                style={{ backgroundColor: d.color || '#fff' }}
              >
                {d.image ? (
                  <>
                    <img src={d.image} alt={d.text} className='dnd-card-img' draggable={false} />
                    <span className='dnd-card-label'>{d.text}</span>
                  </>
                ) : d.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right Board */}
        <div className='dnd-right-board'>
          <h4 className='dnd-title'>Jawaban</h4>
          <div className='dnd-zones'>
            {question.dropZones.map((z, idx) => {
              const placedDragId = placements[z.id];
              const placedItem = question.draggables.find(d => d.id === placedDragId);
              const isLocked = lockedZones.includes(z.id) || hasAnsweredFully;

              let zoneStyle = {};
              if (isLocked && placedItem) {
                 zoneStyle.borderColor = '#7BC142'; // green natively correct highlight
              }

              return (
                <div 
                  key={z.id} 
                  className={`dnd-zone-wrapper${isCardMode ? ' dnd-zone-wrapper--card' : ''}`}
                  onDrop={(e) => handleDrop(e, z.id)}
                  onDragOver={handleDragOver}
                >
                  <div 
                    className={`dnd-drop-zone${isCardMode ? ' dnd-drop-zone--card' : ''}${isLocked && placedItem ? ' locked' : ''}`}
                    style={zoneStyle}
                    onClick={() => handleRemove(z.id)}
                  >
                    {placedItem ? (
                      <div 
                        draggable={!isLocked}
                        onDragStart={(e) => handleDragStart(e, placedItem.id)}
                        className={`dnd-draggable placed${placedItem.image ? ' dnd-draggable--card' : ''}`}
                        style={{ 
                          backgroundColor: isLocked ? '#7BC142' : (placedItem.color || '#fff'), 
                          color: isLocked ? '#fff' : '#333',
                          cursor: isLocked ? 'default' : 'grab' 
                        }}
                      >
                        {placedItem.image ? (
                          <>
                            <img src={placedItem.image} alt={placedItem.text} className='dnd-card-img' draggable={false} />
                            <span className='dnd-card-label'>{placedItem.text}</span>
                          </>
                        ) : placedItem.text}
                      </div>
                    ) : (
                      isCardMode
                        ? <span className='dnd-zone-label' style={{ textAlign: 'center', flex: 'unset', color: '#51423c' }}>{z.label}</span>
                        : <span className='dnd-placeholder'>Letakkan di sini</span>
                    )}
                  </div>
                  {!isCardMode && <span className='dnd-zone-label'>{z.label}</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='dnd-actions'>
        {(allPlaced || hasAnsweredFully) && (
          <button className={btnClass} onClick={handlePeriksa} disabled={hasAnsweredFully}>
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}
