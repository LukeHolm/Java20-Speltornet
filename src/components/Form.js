import React, { useState, useRef } from 'react'
import Topfooter from './Topfooter';
import Footer from './Footer';
import HeaderThin from './HeaderThin';

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
            </>
            <div>
                <h1 className="form-h1">Bytesförfrågan</h1>
                <h2 className="form-h2">Vilket spel vill du byta bort?</h2>
                <label className="form-h3" for="boardgame">Spelets namn: </label><br></br>
                <input type="text" id="boardgame" value={boardgame} onChange={(event) => setBoardgame(event.target.value)} />
            </div>
            <div>
                <h3 className="form-h3">Ladda upp bilder på ditt spel:</h3>
                <i class="far fa-camera"></i>
            </div>
            <hr className="line"></hr>
            <div>
                <h3 className="form-h3">Skick på ditt spel:</h3>
                <h3 className="form-h3">Slitage:</h3>
                <input type="radio" name="gameCondition" value="new" />
                <label for="new">Nyskick</label>
                <input type="radio" name="gameCondition" value="littleWorn" />
                <label for="littleWorn">Lite slitet</label>
                <input type="radio" name="gameCondition" value="muchWorn" />
                <label for="muchWorn">Mycket slitet</label>
            </div>
            <div>
                <h3 className="form-h3">Komponenter:</h3>
                <input type="radio" name="gameComponents" value="new" />
                <label for="new">Ingen del saknas</label>
                <input type="radio" name="gameComponents" value="littleWorn" />
                <label for="littleWorn">Delar saknas</label>
            </div>
            <div>
                <h3 className="form-h3">Detaljer</h3>
                <label for="details" className="body-text">Saknade komponenter och slitage</label>
                <textarea className="textarea" name="details" rows="5" cols="30" placeholder="Skriv här">
                </textarea>
            </div>
            <hr className="line"></hr>

            <div>
                <h3 className="form-h3">Hälsning</h3>
                <label for="greeting" className="body-text">Skriv en kort hälsning till bytaren! </label>
                <textarea className="textarea" name="greeting" rows="5" cols="30" placeholder="Skriv här">
                </textarea>
            </div>

            <hr className="line"></hr>
            <div>
                <h3 className="form-h3">Välj leveranssätt::</h3>
                <input type="radio" name="gameCondition" value="new" />
                <label for="new">Postnord - Hemleverans     (46 kr)</label><br></br>
                <input type="radio" name="gameCondition" value="littleWorn" />
                <label for="littleWorn">Instabox - Närmaste återbud     (0 kr)</label><br></br>
                <input type="radio" name="gameCondition" value="muchWorn" />
                <label for="muchWorn">Brevuggla - Hemleverans     (Lite vatten)</label><br></br>
            </div>
            <div>
                <input type="submit" id="submitbutton" value="Send" />
            </div>
            <>
                <Topfooter />
                <Footer />
            </>
        </form>

    )
}

export default Form

