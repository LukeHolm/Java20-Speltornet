import React, { useState } from 'react'
import Camera from './Camera'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

/*Skapa övre del med bilder (bl.a. en funktion slideshow) och text om spelet som ska bytas bort. 4 olika element*/
/*Färdigställa formuläret enligt utseende i Figma */

/*1. Spara varibler i en array (det som användaren fyller i) */
/*2. Skapa en nedfällningsfunktion(fold down?) med onClick (Du vill byta bort)*/
/*3. Skriva array/objekt till fil (databas)*/

const Form = () => {

    let history = useHistory();

    const [boardgame, setBoardgame] = useState('');

    const submitForm = (event) => {
        event.preventDefault();

        const requestBody = {
            boardgame: boardgame,
            /*{lägg till fler här}*/
        };

    }


    

    return (
        <div className="container">
            <form onSubmit={(event) => submitForm(event)}>
                <div className="col">
                    <div className="row form">

                        {/*<div className="form-element">
                            <h2 className="form-h2">Vilket spel vill du byta bort?</h2>

                    
                                <label className="form-h3" for="boardgame">Spelets namn: </label><br></br>
                                <input className="thin-textarea" type="text" id="boardgame" placeholder="Skriv här"
                                    value={boardgame} onChange={(event) => setBoardgame(event.target.value)} />
                        </div>
                        <div className="form-element">
                            <h3 className="form-h3">Ladda upp bilder på ditt spel:</h3>
                            <div className="camera-box"><Camera /></div>
    </div>*/}

                        <hr className="line"></hr>

                        <h4 className="form form-text">Vad du vill byta mot Catan?</h4>
                        <p className="bold">Du vill ha</p><br></br>

                        <input type="radio" id="radio" name="boardgame" value="myBoardgame" />

                        {/*TODO: Denna ska ej vara hårdkodad*/}
                        <label for="myBoardgame" id="radio">Catan</label>

                        {/*Styla radio buttons, se sparad länk */}
                        <label>
                            <input type="radio" name="radio" />
                             Catan
                            </label>



                        <div className="form-element">
                            <h5 className="form-h5">Skick på ditt spel:</h5>
                            <h5 className="form-h5">Slitage:</h5>

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
                            <label for="details" className="body-text">Saknade komponenter och slitage</label><br />
                            <textarea className="textarea" name="details" rows="5" cols="30" placeholder="Skriv här">
                            </textarea>
                        </div>
                        <hr className="line"></hr>

                        <div className="form-element">
                            <h3 className="form-h3">Hälsning</h3>
                            <label for="greeting" className="body-text">Skriv en kort hälsning till bytaren! </label><br />
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

                            <button className="cancel" onClick={() => { if (window.confirm('Vill du verkligen avsluta?')) { <Link to="/" /> } }}>Avbryt</button>
                            <input className="send-request" type="submit" id="submitbutton" value="Skicka bytesförfrågan" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form