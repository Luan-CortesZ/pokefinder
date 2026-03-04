import './styles/HomePage.scss'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const items = [
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar",
    "Paldea",
    "Toutes"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReseting, setIsReseting] = useState(false);
  
  const itemHeight = 60;

  const handlePrev = () => {
    if (isReseting) return;
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (isReseting) return;
    setCurrentIndex(currentIndex + 1);
  };
  const checkPosition = () => {
    const limit = items.length;
    if (currentIndex >= limit || currentIndex <= -limit) {
      setIsReseting(true);
      setCurrentIndex(currentIndex % limit);
    }
  };

  useEffect(() => {
    if (isReseting) {
      setTimeout(() => {
        setIsReseting(false);
      }, 20);
    }
  }, [isReseting]);

  let extendedItems: string[] = [];
  const repeatCount = 20; 

  for (let i = 0; i < repeatCount; i++) {
    extendedItems = [...extendedItems, ...items];
  }
  extendedItems = [...extendedItems, ...items];
  for (let i = 0; i < repeatCount; i++) {
    extendedItems = [...extendedItems, ...items];
  }

  const centerIndex = repeatCount * items.length;
  const translateY = (centerIndex + currentIndex - 1) * itemHeight;

  return (
    <div className="home-page">
      <h1>HomePage!</h1>
      <h2>Régions Pokémon</h2>

      <div className="pokedex-container">
        <button className="arrow-btn up" onClick={handlePrev}>▲</button>
        
        <div className="screen-wrapper">
          <div 
            className="list-track" 
            onTransitionEnd={checkPosition}
            style={{ 
              transform: `translateY(-${translateY}px)`,
              transition: isReseting ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            {extendedItems.map((region, index) => (
              <div key={index} className="list-item">
                {region}
              </div>
            ))}
          </div>
        </div>

        <button className="arrow-btn down" onClick={handleNext}>▼</button>
      </div>
    </div>
  )
}