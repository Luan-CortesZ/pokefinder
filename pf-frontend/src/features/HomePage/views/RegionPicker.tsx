import RegionButton from "./RegionButton";

import { useState, useEffect } from "react";

export default function RegionPicker() {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [isReseting, setIsReseting] = useState(false);
      
      // const itemHeight = 60;
    
      const handlePrev = () => {
        if (isReseting) return;
        setCurrentIndex(currentIndex - 1);
      };
    
      const handleNext = () => {
        if (isReseting) return;
        setCurrentIndex(currentIndex + 1);
      };

        useEffect(() => {
    if (isReseting) {
      setTimeout(() => {
        setIsReseting(false);
      }, 20);
    }
  }, [isReseting]);
    
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
    
      return (
        <div className="region-picker">
          {items.map((region) => (
            <RegionButton key={region} region={region} />
          ))}
            <button className="arrow-btn up" onClick={handlePrev}>▲</button>
            <button className="arrow-btn down" onClick={handleNext}>▼</button>
        </div>
      );
        
}