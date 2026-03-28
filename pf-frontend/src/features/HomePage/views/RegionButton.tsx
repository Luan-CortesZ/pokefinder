import { useState } from "react";

type RegionButtonProps = {
    region: string;
    isLocked?: boolean;
    onSelect?: (region: string) => void;
};

export default function RegionButton(props: RegionButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen((previousState) => !previousState);
        props.onSelect?.(props.region);
    }

    return (
        <div className={`region-button-wrapper ${isOpen ? "is-open" : ""}`}>
            <button
                className={`region-button ${props.isLocked ? "is-locked" : ""}`}
                onClick={handleClick}
                type="button"
            >
                {props.region}
            </button>

            {isOpen && (
                <div className="region-actions">
                    <button type="button">Find pokemon</button>
                    <button type="button">Find TCG Card</button>
                    <button type="button">Silhouette</button>
                    <button type="button">Pokeflaire</button>
                </div>
            )}
        </div>
    );
}
