import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const noButtonRef = useRef(null);
  
  const messages = [
    "No",
    "¿Segura? 🥺",
    "¡Piénsalo bien! 🌸",
    "¡Ultima oportunidad! 😠",
    "¡Esta bien! 🚮"
  ];

  const handleNoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 3) {
      setTimeout(() => {
        const button = noButtonRef.current;
        if (button) {
          button.style.transform = 'translateX(100vw) rotate(720deg)';
          button.style.opacity = '0';
        }
      }, 2000);
    }

    if (newCount === messages.length - 1) {
      Swal.fire({
        title: '¡Snoopy se llevó el "No"!',
        html: `<div class="snoopy-alert-content">
                <img src="https://media.tenor.com/1CKscM4RI9gAAAAi/snoopy.gif" 
                     alt="Snoopy feliz" 
                     class="snoopy-alert-img">
                <p class="snoopy-alert-text">¡A la basura con el "No"! 🗑️</p>
              </div>`,
        confirmButtonText: '¡Quiero decir que Sí! ❤️',
        background: '#fff0f6',
        confirmButtonColor: '#ff69b4',
        customClass: {
          popup: 'responsive-swal',
          title: 'swal-title'
        }
      });
    }
  };

  const handleSiClick = () => {
    Swal.fire({
      title: '¡Snoopy celebra contigo!',
      html: `<div class="celebration-content">
              <p class="celebration-text">¡Te amo! 💖</p>
              <img src="https://media.tenor.com/Jloq3y4mk8kAAAAj/amor-love.gif" 
                   alt="Celebración" 
                   class="celebration-img">
            </div>`,
      confirmButtonText: '❤️ ¡A celebrar! ❤️',
      background: '#fff9fb',
      confirmButtonColor: '#ff69b4',
      customClass: {
        popup: 'responsive-swal',
        title: 'swal-title'
      }
    });
  };

  return (
    <div className="container">
      <div className="heart"></div>
      <h1 className="question">¿Quieres ser mi San Valentín?</h1>
      <div className="buttons">
        <button className="btn si" onClick={handleSiClick}>
          Sí 🎀
        </button>
        <button
          ref={noButtonRef}
          className={`btn fase-${Math.min(clickCount, 4)}`}
          onClick={handleNoClick}
          style={{ transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {messages[Math.min(clickCount, messages.length - 1)]}
        </button>
      </div>
      
      {clickCount >= 2 && (
        <div className="snoopy-kick-container">
          <img 
            src="https://media.tenor.com/1CKscM4RI9gAAAAi/snoopy.gif" 
            className="snoopy-kick" 
            alt="Snoopy pateando"
          />
        </div>
      )}
    </div>
  );
}

export default App;