import React, { useState, useRef } from 'react'
import Topfooter from './Topfooter';
import Footer from './Footer';
import HeaderThin from './HeaderThin';
import Changereceipt from './Changereceipt'
import Burger from './Burger'
import Camera from './Camera'

const Form = () => {

    const [boardgame, setBoardgame] = useState('');

    const submitForm = (event) => {
        event.preventDefault();

        const requestBody = {
            boardgame: boardgame,
            /*{lägg till fler här}*/
        };

    }

    return (
        <form onSubmit={(event) => submitForm(event)}>
            <>
                <HeaderThin />
                <Burger />
            </>
            <div>
                <h1 className="form-h1">Bytesförfrågan</h1>
            </div>
            <div className="form-element">
                <h2 className="form-h2">Du vill ha:</h2>
                <Changereceipt />
            </div>
            <div className="form-element">
                <h2 className="form-h2">Vilket spel vill du byta bort?</h2>
                <label className="form-h3" for="boardgame">Spelets namn: </label><br></br>
                <input className="thin-textarea" type="text" id="boardgame" placeholder="Skriv här" 
                value={boardgame} onChange={(event) => setBoardgame(event.target.value)} />
            </div>
            <div className="form-element">
                <h3 className="form-h3">Ladda upp bilder på ditt spel:</h3>
                <div className="camera-box"><Camera /></div>
            </div>

            <hr className="line"></hr>
            <div className="form-element">
                <h3 className="form-h3">Skick på ditt spel:</h3>
                <h3 className="form-h3">Slitage:</h3>
                <input type="radio" id="radio" name="gameCondition" value="new" />
                <label for="new" id="radio-text">Nyskick</label>
                <input type="radio" id="radio" name="gameCondition" value="littleWorn" />
                <label for="littleWorn" id="radio-text">Lite slitet</label>
                <input type="radio" id="radio" name="gameCondition" value="muchWorn" />
                <label for="muchWorn" id="radio-text">Mycket slitet</label>
            </div>
            <div className="form-element">
                <h3 className="form-h3">Komponenter:</h3>
                <input type="radio" id="radio" name="gameComponents" value="new" />
                <label for="allParts" id="radio-text">Ingen del saknas</label>
                <input type="radio" id="radio" name="gameComponents" value="littleWorn" />
                <label for="partsMissing" id="radio-text">Delar saknas</label>
            </div>
            <div className="form-element">
                <h3 className="form-h3">Detaljer</h3>
                <label for="details" className="body-text">Saknade komponenter och slitage</label>
                <textarea className="textarea" name="details" rows="5" cols="30" placeholder="Skriv här">
                </textarea>
            </div>
            <hr className="line"></hr>

            <div className="form-element">
                <h3 className="form-h3">Hälsning</h3>
                <label for="greeting" className="body-text">Skriv en kort hälsning till bytaren! </label>
                <textarea className="textarea" name="greeting" rows="5" cols="30" placeholder="Skriv här">
                </textarea>
            </div>

            <hr className="line"></hr>
            <div className="form-element">
                <h3 className="form-h3">Välj leveranssätt:</h3>
                <input type="radio" id="radio" name="delivery" value="new" />
                <label for="homeDelivery">Postnord - Hemleverans     (46 kr)</label><br></br>
                <input type="radio" id="radio" name="delivery" value="littleWorn" />
                <label for="pickupDelivery">Instabox - Närmaste återbud     (0 kr)</label><br></br>
                <input type="radio" id="radio" name="delivery" value="muchWorn" />
                <label for="owlDelivery">Brevuggla - Hemleverans     (Lite vatten)</label><br></br>
            </div>
            <div className="form-element">
                <input type="submit" id="submitbutton" value="Send" />
            </div>
            <button className="cancel">Avbryt</button>
            <button className="send-request">Skicka Bytesförfrågan</button>v
            <>
                <Topfooter />
                <Footer />
            </>
        </form>

    )
}

export default Form

