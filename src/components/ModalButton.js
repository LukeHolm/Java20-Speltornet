import {React, useState} from 'react';
import GamePopup from './GamePopup'

import '../App.css'

function ModalButton() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="knapp" onClick={() => setShow(true)}>Open</button>
            <GamePopup title="Catan" onClose={() => setShow(false)} show={show}>
            </GamePopup>
        </div>
    )
}
export default ModalButton;