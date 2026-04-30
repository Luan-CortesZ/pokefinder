import { type TransitionEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegionButton from "./RegionButton";
import "./styles/RegionPicker.scss";
import arrowUp from "../../../assets/images/fleche-vers-le-haut.png";
import arrowDown from "../../../assets/images/fleche-vers-le-bas.png";


const REGIONS = [
  "Kanto",
  "Johto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos",
  "Alola",
  "Galar",
  "Paldea",
  "Toutes",
];

const REGION_IDS: Record<string, string> = {
  Kanto: "1",
  Johto: "2",
  Hoenn: "3",
  Sinnoh: "4",
  Unova: "5",
  Kalos: "6",
  Alola: "7",
  Galar: "8",
  Paldea: "9",
};

type Direction = -1 | 0 | 1;

export default function RegionPicker() {
  const navigate = useNavigate();
  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);
  const [openRegion, setOpenRegion] = useState<string | null>(null);
  const [direction, setDirection] = useState<Direction>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function getLoopedRegion(index: number) {
    return REGIONS[(index + REGIONS.length) % REGIONS.length];
  }

  function handlePreviousClick() {
    if (isAnimating) return;

    setOpenRegion(null);
    setDirection(-1);
    setIsAnimating(true);
  }

  function handleNextClick() {
    if (isAnimating) return;

    setOpenRegion(null);
    setDirection(1);
    setIsAnimating(true);
  }

  function handleRegionSelect(region: string) {
    setOpenRegion((previousRegion) => {
      return previousRegion === region ? null : region;
    });
  }

  function handleTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    if (!isAnimating) return;
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;

    if (direction === 1) {
      setCurrentRegionIndex((previousIndex) => {
        return (previousIndex + 1) % REGIONS.length;
      });
    }

    if (direction === -1) {
      setCurrentRegionIndex((previousIndex) => {
        return (previousIndex - 1 + REGIONS.length) % REGIONS.length;
      });
    }

    setDirection(0);
    setIsAnimating(false);
  }

  const cardsToRender = Array.from({ length: 7 }, (_, slotIndex) => {
    const region = getLoopedRegion(currentRegionIndex + slotIndex - 3);

    let displayedSlot = slotIndex;

    if (isAnimating) {
      if (direction === 1) {
        displayedSlot = slotIndex - 1;
      }

      if (direction === -1) {
        displayedSlot = slotIndex + 1;
      }
    }

    return {
      key: `${region}-${currentRegionIndex}-${slotIndex}`,
      region,
      displayedSlot,
      isCenterCard: displayedSlot === 3,
      shouldHandleTransitionEnd: slotIndex === 3,
    };
  });

  return (
    <div className="region-picker">
      <button
        className="arrow-btn up"
        disabled={isAnimating}
        onClick={handlePreviousClick}
        type="button"
      >
        <img src={arrowUp} />
      </button>

      <div className="region-picker-content">
        <div className="carousel">
          <div className="wheel-stage">
            {cardsToRender.map((card) => (
              <div
                className={`card slot-${card.displayedSlot} ${
                  card.isCenterCard ? "is-active" : ""
                }`}
                key={card.key}
                onTransitionEnd={
                  card.shouldHandleTransitionEnd
                    ? handleTransitionEnd
                    : undefined
                }
              >
                <RegionButton
                  isOpen={openRegion === card.region}
                  onSelect={handleRegionSelect}
                  region={card.region}
                />
              </div>
            ))}
          </div>
        </div>

        {openRegion && (
          <div className="region-actions" aria-label={`Actions ${openRegion}`}>
            <button
              onClick={() =>
                navigate("/find-pokemon", {
                  state: {
                    regionName: openRegion,
                    regionId: REGION_IDS[openRegion] ?? "1",
                  },
                })
              }
              type="button"
            >n b
              Find pokemon
            </button>
            <button type="button">Find TCG Card</button>
            <button type="button">Silhouette</button>
            <button type="button">Pokeflaire</button>
          </div>
        )}
      </div>

      <button
        className="arrow-btn down"
        disabled={isAnimating}
        onClick={handleNextClick}
        type="button"
      >        
        <img src={arrowDown} />
      </button>
    </div>
  );
}
