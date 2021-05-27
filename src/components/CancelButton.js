import {React, useState} from 'react';
import CancelPopup from './CancelPopup';


const CancelButton = ({id}) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button className="cancel" id={id} onClick={() => setShow(true)}>Avbryt</button>
            <CancelPopup onClose={() => setShow(false)} show={show}>
            </CancelPopup>
        </div>
    )
}
export default CancelButton;