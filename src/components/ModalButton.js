import {React, useState} from 'react';
import GamePopup from './GamePopup'

const ModalButton = gamecard => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="knapp" onClick={() => setShow(true)}>Se spel</button>
            <GamePopup onClose={() => setShow(false)} show={show} title={gamecard.title} imageURL={gamecard.imageURL} description={gamecard.description}>
            </GamePopup>
        </div>
    )
}
export default ModalButton;