import React from 'react';
import './MapUI.css';

// Island component with locked/unlocked visual states
export function IslandImage({ island, position, onClick }) {
  const isLocked = !island.isUnlocked;

  return (
    <div
      className='island-container'
      style={{
        position: 'absolute',
        left: position.left,
        top: position.top,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <img
        src={`/assets/budayana/islands/${island.name}.png`}
        alt={island.name}
        className={`island ${island.slug}`}
        style={{
          position: 'relative', // Override CSS position: absolute
          top: 0,
          left: 0,
          filter: isLocked ? 'brightness(0.4) grayscale(0.3)' : 'none',
          transition: 'filter 0.3s ease',
        }}
      />
      {isLocked && (
        <div
          className='island-lock-overlay'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
        >
          <img
            src='/assets/budayana/islands/padlock.png'
            alt='locked'
            style={{
              width: 'auto',
              height: '40px',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
            }}
          />
        </div>
      )}
    </div>
  );
}

// ISLAND DISPLAY DATA (positions on map)
export const islandPositions = {
  sumatra: { left: '5%', top: '25%' },
  kalimantan: { left: '28%', top: '28%' },
  sulawesi: { left: '49%', top: '40%' },
  maluku: { left: '63%', top: '40%' },
  papua: { left: '75%', top: '45%' },
  jawa: { left: '25%', top: '70%' },
  bali: { left: '50%', top: '75%' },
  nusa: { left: '60%', top: '72%' },
};

export default function MapUI({ allIslands, onIslandClick }) {
  return (
    <>
      {allIslands.map((island) => {
        const position = islandPositions[island.id] || islandPositions[island.slug];
        if (!position) return null;

        return (
          <IslandImage
            key={island.id || island.slug}
            island={island}
            position={position}
            onClick={() => onIslandClick(island)}
          />
        );
      })}

      {/* BACKGROUND ASSETS */}
      <div className='backgroundassets'>
        <img src='/assets/budayana/islands/wave1.png' alt='wave1' className='wave wave1' />
        <img src='/assets/budayana/islands/wave1.png' alt='wave1' className='wave wave2' />
        <img src='/assets/budayana/islands/wave1.png' alt='wave1' className='wave wave3' />
        <img src='/assets/budayana/islands/wave1.png' alt='wave1' className='wave wave4' />
        <img src='/assets/budayana/islands/wave1.png' alt='wave1' className='wave wave5' />
        <img src='/assets/budayana/islands/wave1.png' alt='wave1' className='wave wave6' />
        <img src='/assets/budayana/islands/wave2.png' alt='wave2' className='wave wave7' />
        <img src='/assets/budayana/islands/wave2.png' alt='wave2' className='wave wave8' />
        <img src='/assets/budayana/islands/wave2.png' alt='wave2' className='wave wave9' />
        <img src='/assets/budayana/islands/wave1.png' alt='wave2' className='wave wave10' />
        <img src='/assets/budayana/islands/wave2.png' alt='wave2' className='wave wave11' />

        {/* Animals */}
        <img src='/assets/budayana/islands/paus.png' alt='paus' className='paus' />
        <img src='/assets/budayana/islands/hiuk.png' alt='hiuk' className='hiuk' />
      </div>
    </>
  );
}
