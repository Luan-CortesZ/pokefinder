import { useState } from "react";

export default function RegionButton(props: { region: string }) {  

    const [isOpen, setIsOpen] = useState(false); // par défaut, le menu est fermé
    
    function handleClick() {
        setIsOpen(!isOpen); // toggle l'état du menu
    }

    // const value = props.region;
    // return <button onClick={handleClick}>{value}</button>
    return (
        <div>
            <button onClick={handleClick}>{props.region}</button>

            {isOpen === true && (
                <div>
                    <button>Find pokemon</button>
                    <button>Find TCG Card</button>
                    <button>Silhouette</button>
                    <button>Pokeflaire</button>
                </div>
            )}
        </div>
    )
}