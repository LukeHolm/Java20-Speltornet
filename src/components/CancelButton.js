import {React, useState} from 'react';
import CancelPopup from './CancelPopup';


const CancelButton = gamecard => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="cancel" onClick={() => setShow(true)}>Avbryt</button>
            <CancelPopup onClose={() => setShow(false)} show={show} title={gamecard.title} imageURL={gamecard.imageURL} description={gamecard.description}>
            </CancelPopup>
        </div>
    )
}
export default CancelButton;