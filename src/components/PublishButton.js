import {React, useState} from 'react';

import PublishPopup from './PublishPopup';


const CancelButton = ( {trading}, {tradingFor} ) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="publish-modal-button" onClick={() => setShow(true)}>Godkänn och publicera</button>
            <PublishPopup show={show} trading="Monopol" tradingFor="Öppen för förslag">
            </PublishPopup>
        </div>
    )
}
export default CancelButton;