import React from 'react';
import { useHistory } from 'react-router-dom';
import Warning from '../img/carbon_warning.svg'

const CancelPopup = props => {
    let history = useHistory();
    if (!props.show) {
        return null;
    }



    return (
        <div className="modal-background" onClick={props.onClose}>
            <div className="cancel-modal-content" onClick={e => e.stopPropagation()}>
                <span onClick={props.onClose} className="close">&times;</span>
                <div className="cancel-modal-body">
                    <div className="cancel-modal-warning"><img src={Warning} alt="Warning" /></div>
                    <div>
                        <p className="tagg cancel-modal-text">Är du säker på att du vill avbryta<br />
                    och slänga din annons?</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 left-align">
                            <button className="cancel-modal-no" onClick={props.onClose}>Nej</button>
                        </div>
                        <div className="col-sm-6 right-align">
                            <button className="cancel-modal-yes" onClick={() => history.push("/")}>Ja</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CancelPopup;