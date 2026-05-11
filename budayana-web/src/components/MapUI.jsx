import React from 'react';
import './MapUI.css';

// Island component with locked/unlocked visual states (desktop map)
export function IslandImage({ island, position, onClick }) {
  const isLocked = !island.isUnlocked;

  return (
    <div
      className={`island-container ${island.slug}-wrapper`}
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
          position: 'relative',
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
  'nusa-tenggara': { left: '60%', top: '72%' },
};

// Friendly display names for mobile cards
const islandDisplayNames = {
  sumatra: 'Sumatra',
  kalimantan: 'Kalimantan',
  sulawesi: 'Sulawesi',
  maluku: 'Maluku',
  papua: 'Papua',
  jawa: 'Jawa',
  bali: 'Bali',
  'nusa-tenggara': 'Nusa Tenggara',
};

export default function MapUI({ allIslands, onIslandClick }) {
  return (
    <>
      {/* ── DESKTOP: original absolute-positioned map (hidden on mobile via CSS) ── */}
      <div className='islands-desktop-map'>
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
      </div>

      {/* ── MOBILE: vertical scrollable island card list (hidden on desktop via CSS) ── */}
      <div className='islands-mobile-list'>
        {allIslands.map((island) => {
          const slug = island.slug || island.id;
          const isLocked = !island.isUnlocked;
          const displayName = islandDisplayNames[slug] || island.name;

          return (
            <div
              key={island.id || island.slug}
              className={`island-mobile-card ${isLocked ? 'island-mobile-locked' : ''}`}
              onClick={() => !isLocked && onIslandClick(island)}
            >
              <div className='island-mobile-img-wrap'>
                <img
                  src={`/assets/budayana/islands/${island.name}.png`}
                  alt={island.name}
                  className='island-mobile-img'
                  style={{
                    filter: isLocked ? 'brightness(0.4) grayscale(0.3)' : 'none',
                  }}
                />
                {isLocked && (
                  <div className='island-mobile-lock'>
                    <img
                      src='/assets/budayana/islands/padlock.png'
                      alt='locked'
                      style={{ width: 'auto', height: '36px' }}
                    />
                  </div>
                )}
              </div>
              <div className='island-mobile-label'>{displayName}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
