import React, { useState, useEffect } from 'react';
import GamePopup from './GamePopup';
import gamecatalog from '../data/gamecatalog.json';



const Gamecard = () => {

    const [gamecards, setGamecards] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch("gamecatalog.json").then(response => response.json().then(data => setGamecards(data)))
    }, [])

    return (
        <div>
            {gamecards.map(gamecard => (
                <div className="box col">
                    <img className="bild" src={gamecard.imageURL} alt="bild" />
                    <p className="spelnamn">{gamecard.title}</p>
                    <button className="knapp" onClick={() => setShow(true)}>Se spel</button>
                    <GamePopup title={gamecard.title} onClose={() => setShow(false)} show={show}>
                        <p>Body body!</p>
                    </GamePopup>
                </div>
            ))}
        </div>
    )
}

export default Gamecard;