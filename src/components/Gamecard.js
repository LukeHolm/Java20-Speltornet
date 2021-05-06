import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import ModalButton from './ModalButton'

const Gamecard = () => {
    let history = useHistory();
    const [gamecards, setGamecards] = useState([]);

    useEffect(() => {
        fetch("gamecatalog.json").then(response => response.json().then(data => setGamecards(data)))
    }, [])

    return (
        <div className="container">
            {gamecards.map(gamecard => (
                <div className="box col col-md-3">

                    <img className="bild" src={gamecard.imageURL} alt={gamecard.title} />
                    <p className="spelnamn">{gamecard.title}</p>
                    <button className="knapp" onClick={() => history.push("/GameAdds/" + gamecard.id)}>Se annonser</button>
                </div>
            ))}
        </div>
    )
}
export default Gamecard;