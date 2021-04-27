import React, { useState, useEffect } from 'react';
import ModalButton from './ModalButton'
const Gamecard = () => {
    const [gamecards, setGamecards] = useState([]);
    useEffect(() => {
        fetch("gamecatalog.json").then(response => response.json().then(data => setGamecards(data)))
    }, [])
    return (
        <div>
            {gamecards.map(gamecard => (
                <div className="box col">
                    <img className="bild" src={gamecard.imageURL} alt={gamecard.title} />
                    <p className="spelnamn">{gamecard.title}</p>
                    <ModalButton title={gamecard.title} imageURL={gamecard.imageURL} description={gamecard.description}/>
                </div>
            ))}
        </div>
    )
}
export default Gamecard;