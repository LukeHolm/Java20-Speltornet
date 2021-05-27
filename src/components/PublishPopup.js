import React from 'react';
import { useHistory } from 'react-router-dom';

import Confirm from '../img/Confirm.svg'

const PublishPopup = props => {
    let history = useHistory();
    if (!props.show) {
        return null;
    }



    return (
        <div className="modal-background">
            <div className="publish-modal-content" onClick={e => e.stopPropagation()}>
                <span onClick={props.onClose} className="close">&times;</span>
                <div className="publish-modal-body">
                    <div className="center-align">
                        <h4>Din annons är publicerad!</h4>
                        <img className="publish-modal-confirm" src={Confirm} alt="check"></img>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 left-align">
                            <p className="bold">Vad händer nu?</p>
                            <p>
                                1. Annonsen publiceras<br />
                                2. Bytesförfrågningar skickas till din mail<br />
                                3. Ni bestämmer leveranssätt över mail<br />
                                4. Spelen skickas/levereras<br />
                                5. Du tar ner annonsen från Speltornet</p>
                        </div>
                        <div className="col-sm-3 offset-sm-1 left-align">
                            <br/><br/>
                            <p className="tagg-bold five-margin-bottom">Du har:</p>
                            <p className="vbm-tag">{props.trading}</p>
                            <br/><br/>
                            <p className="tagg-bold five-margin-bottom">Du vill byta mot:</p>
                            <p className="vbm-tag">{props.tradingFor}</p>
                        </div>
                    </div>

                    <div className="center-align">
                        <button className="publish-modal-back" onClick={() => history.push("/")}>Tillbaka till startsida</button>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default PublishPopup;