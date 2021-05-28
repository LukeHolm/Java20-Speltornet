import React from 'react';
import { useHistory } from 'react-router-dom';

import Confirm from '../img/Confirm.svg'

const RequestPopup = props => {
    let history = useHistory();
    if (!props.show) {
        return null;
    }

    console.log(props.trading);
    console.log(props.tradingFor);



    return (
        <div className="modal-background">
            <div className="request-modal-content" onClick={e => e.stopPropagation()}>
                <span onClick={props.onClose} className="close">&times;</span>
                <div className="request-modal-body">
                    <div className="center-align">
                        <h4>Din förfrågan är skickad!</h4>
                        <img className="request-modal-confirm" src={Confirm} alt="check"></img>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 left-align">
                            <p className="bold">Vad händer nu?</p>
                            <p>
                                1. Din förfrågan skickas via mail<br />
                                2. Ni bestämmer leveranssätt över mail<br />
                                3. Spelen skickas/levereras</p>
                        </div>
                        <div className="col-sm-3 offset-sm-1 left-align">
                            <br/><br/>
                            <p className="tagg-bold five-margin-bottom">Du har:</p>
                            <p className="vbm-tag">{props.tradingFor}</p>
                            <br/><br/>
                            <p className="tagg-bold five-margin-bottom">Du vill byta mot:</p>
                            <p className="vbm-tag">{props.trading}</p>
                        </div>
                    </div>

                    <div className="center-align">
                        <button className="request-modal-back" onClick={() => history.push("/")}>Tillbaka till startsida</button>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default RequestPopup;