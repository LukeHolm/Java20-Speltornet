import {React, useState} from 'react';

import PublishPopup from './PublishPopup';


const PublishButton = ( {trading, tradingFor} ) => {
    const [show, setShow] = useState(false)

console.log(tradingFor);
console.log(trading);
    return (
        <div>
            <button className="publish-modal-button" onClick={() => setShow(true)}>Godkänn och publicera</button>
            <PublishPopup show={show} trading={trading} tradingFor={tradingFor}>
            </PublishPopup>
        </div>
    )
}
export default PublishButton;