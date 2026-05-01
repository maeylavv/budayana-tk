import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ToggleMenu.css';

export default function ToggleMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const isQuiz = location.pathname.includes('/quiz');

  return (
    <div className='toggle-menu-container' style={{ pointerEvents: 'auto' }}>
      <button 
        className={`toggle-menu-btn ${!isQuiz ? 'active' : ''}`}
        onClick={() => navigate('/home')}
      >
        Cerita Rakyat
      </button>
      <button 
        className={`toggle-menu-btn ${isQuiz ? 'active' : ''}`}
        onClick={() => navigate('/quiz')}
      >
        Quiz Kultur
      </button>
    </div>
  );
}
