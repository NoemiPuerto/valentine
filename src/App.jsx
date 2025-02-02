import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const noButtonRef = useRef(null);
  
  const messages = [
    "no",
    "¿Segura? 🥺",
    "¡Piénsalo bien! 🌸",
    "¡Ultima oportunidad! 😠",
    "¡Esta bien! 🚮",
  ];

  const handleNoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 3) {
      // Animación de patada con delay
      setTimeout(() => {
        const button = noButtonRef.current;
        if (button) {
          button.style.transform = 'translateX(100vw) rotate(720deg)';
          button.style.opacity = '0';
        }
      }, 2000); // Espera a que Snoopy complete su animación
    }
  };

  const handleSiClick = () => {
    Swal.fire({
      title: '¡Snoopy celebra contigo!',
      html: `<div style="position: relative;">
              <img src="https://media.tenor.com/Jloq3y4mk8kAAAAj/amor-love.gif" 
                   style="width: 250px; border-radius: 15px; border: 3px solid #ff69b4">
              <div style="position: absolute; top: 10px; width: 100%; text-align: center; font-size: 1.8em; 
                          color: #c23b3b; text-shadow: 2px 2px 4px white">¡Te amo! 🎉</div>
            </div>`,
      confirmButtonText: '❤️ ¡A celebrar! ❤️',
      background: '#fff9fb',
      confirmButtonColor: '#ff69b4',
      showClass: {
        popup: 'swal-show-animation'
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
          className={`btn fase-${Math.min(clickCount, 5)}`}
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