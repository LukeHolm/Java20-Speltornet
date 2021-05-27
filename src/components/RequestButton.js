import {React, useState} from 'react';

import RequestPopup from './RequestPopup';


const RequestButton = ( {trading, tradingFor} ) => {
    const [show, setShow] = useState(false)

console.log(tradingFor);
console.log(trading);
    return (
        <div>
            <button className="request-modal-button" onClick={() => setShow(true)}>Skicka bytesförfrågan</button>
            <RequestPopup show={show} trading={trading} tradingFor={tradingFor}>
            </RequestPopup>
        </div>
    )
}
export default RequestButton;