import React, { useState } from "react";
import Camera from "./Camera";
import { useHistory } from "react-router-dom";

const AddForm = ({ gamecard }) => {
  const [chooseGame, setChooseGame] = useState("");
  const [headline, setHeadline] = useState("");
  const [salesPitch, setSalesPitch] = useState("");
  const [condition, setCondtion] = useState("");
  const [partsMissing, setPartsMissing] = useState("");
  const [partsText, setPartsText] = useState("");
  const [delivery, setDelivery] = useState("");
  const [gamesWanted, setGamesWanted] = useState("");

  // spelet du vill bytabort
  // vad vill du ha i utbyte (sökruta från gamecatlog eller öppen för förslag)

  // const URL = "https://609a4cbe0f5a13001721a8af.mockapi.io/ContactForm";

  const submitForm = (event) => {
    //   event.preventDefault();

    const requestBody = {
      chooseGame: chooseGame,
      headline: headline,
      salesPitch: salesPitch,
      gameCondition: condition,
      missingParts: partsMissing,
      partsComment: partsText,      
      image: [],
      delivery: delivery,
      gamesWanted: gamesWanted
    };

    //   fetch(URL, {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify({ requestBody }),
    //   }).then((responseFromAPI) => {
    //     if (responseFromAPI.status === 404) {
    //       alert("Det gick fel, sidan finns inte");
    //     } else {
    //       alert("Bytesförfrågan skickad!");
    //       setHeadline("");
    //       setSalesPitch("");
    //       setCondtion("");
    //       setPartsMissing("");
    //       setPartsText("");
    //     }
    //     console.log("HEHEHEEHEHEH", responseFromAPI.status);
    //     console.log(requestBody);
    //   });
  };

  return (
    <div className="wrapper">
      <form onSubmit={(event) => submitForm(event)}>
        <div className="col">
          <div className="form">
            <h2 id="createAdd">Skapa annons</h2>
            <p>
              Ladda upp ditt spel på Speltornet. Du kommer därefter få
              <br />
              bytesförfrågningar från andra användare. Efter att du godkänt en
              <br />
              bytesförfrågan genomför ni bytet!
            </p>
            <div className="onetwothree">
              <p className="bold" id="create-add">
                1. Skapa annons
              </p>
              <p className="bold">2. Granska annons</p>
              <p className="bold">3. Publicera</p>
            </div>
            <h5 className="form-element">Vilket spel vill du byta bort?</h5>
            <div className="form-element">
              <select
                id="chooseGame"
                value={chooseGame}
                onChange={(event) => setChooseGame(event.target.value)}
              >
                <option>Välj spel...</option>
                {gamecard.map((title) => (
                  <option>{title.title}</option>
                ))}
              </select>
            </div>

            {/* Nedan ska bara synas när man valt spel. Bytas ut mot rullistan */}
            <p className="bold">
              Valt spel (ska bara synas efter man valt spel)
            </p>
            {/* Lägg in valt spel här */}

            <div className="form-element">
              <h5>Rubrik</h5>
              <input
                className="thin-textarea"
                type="text"
                id="headline"
                placeholder="Skriv här..."
                value={headline}
                onChange={(event) => setHeadline(event.target.value)}
              />
            </div>
            <div className="form-element">
              <h5>Text</h5>
              <label for="greeting"></label>
              <br />
              <textarea
                type="textarea"
                className="textarea"
                name="greeting"
                rows="5"
                cols="30"
                placeholder="Skriv här..."
                value={salesPitch}
                onChange={(event) => setSalesPitch(event.target.value)}
              />
            </div>

            <h5>Skick på ditt spel:</h5>

            <div className="form-element">
              <h5>Slitage:</h5>
              <input
                type="radio"
                id="new"
                name="gameCondition"
                value="new"
                checked={condition === "new"}
                onChange={(e) => {
                  setCondtion(e.target.value);
                }}
              />
              <label for="new" id="radio-text">
                Nyskick
              </label>

              <input
                type="radio"
                id="littleWorn"
                name="gameCondition"
                value="littleWorn"
                checked={condition === "littleWorn"}
                onChange={(e) => {
                  setCondtion(e.target.value);
                }}
              />
              <label for="littleWorn" id="radio-text">
                Lite slitet
              </label>

              <input
                type="radio"
                id="muchWorn"
                name="gameCondition"
                value="muchWorn"
                checked={condition === "muchWorn"}
                onChange={(e) => {
                  setCondtion(e.target.value);
                }}
              />
              <label for="muchWorn" id="radio-text">
                Mycket slitet
              </label>
            </div>

            <div className="form-element">
              <h5>Komponenter:</h5>
              <input
                type="radio"
                id="no"
                name="components"
                value="no"
                checked={partsMissing === "no"}
                onChange={(e) => {
                  setPartsMissing(e.target.value);
                }}
              />
              <label for="no" id="radio-text">
                Inga delar saknas
              </label>

              <input
                type="radio"
                id="yes"
                name="components"
                value="yes"
                checked={partsMissing === "yes"}
                onChange={(e) => {
                  setPartsMissing(e.target.value);
                }}
              />
              <label for="yes" id="radio-text">
                Delar saknas
              </label>
            </div>

            <div className="form-element">
              <h5>Kommentar om spelets skick</h5>
              <label for="comment" className="p">
                Beskriv skick och vilka delar som saknas.{" "}
              </label>
              <br />
              <textarea
                className="textarea"
                name="comment"
                rows="5"
                cols="30"
                placeholder="Skriv här..."
                value={partsText}
                onChange={(e) => setPartsText(e.target.value)}
              ></textarea>
            </div>
            <div className="form-element">
              <h5>Ladda upp bilder på ditt spel:</h5>
              <div className="row">
                <div className="camera-box">
                  <Camera />
                </div>
                <div className="camera-box">
                  <Camera />
                </div>
                <div className="camera-box">
                  <Camera />
                </div>
                <div className="camera-box">
                  <Camera />
                </div>
                <div className="camera-box">
                  <Camera />
                </div>
              </div>
            </div>

            <div className="form-element checkbox">
              <h5>Hur vill du genomföra bytet?</h5>
              <div>
                <input type="checkbox" id="postnord" value="postnord" 
                checked={delivery === "postnord"} onChange={(e) => setDelivery(e.target.value)}></input>
                <label for="postnord" id="checkbox-text">Postnord</label>
                <tagg>(fr. 36 SEK)</tagg>
                <p className="detailText">Vid byte bokar du frakten genom postnord.se</p>
              </div>
              <div>
                <input type="checkbox" id="avhämtning" value="avhämtning"
                checked={delivery === "avhämtning"} onChange={(e) => setDelivery(e.target.value)}></input>
                <label for="avhämtning" id="checkbox-text">Avhämtning</label>
                <tagg>(Gratis)</tagg>
                <p className="detailText">Vid byte bestämmer du träff med bytaren.</p>
              </div>
            </div>

            <h4 className="form-text form-element">
              Vad vill du ha i utbyte mot ditt spel?
            </h4>
            <div className="formExchange">
              <h5>Du har</h5>
              {/* Lägg till element (som liknar radio button) */}
              {/* Lägg till symbol frågetecken */}
              <div className="wanted-games">
              <h5>Du vill ha</h5>
              {/* Lägg till sökruta + radiobutton */}
              <select
                id="gamesWanted"
                value={gamesWanted}
                onChange={(event) => setGamesWanted(event.target.value)}              >
                <option>Välj spel...</option>
                {gamecard.map((title) => (
                  <option>{title.title}</option>
                ))}
              </select>
              </div>
            </div>

            {/* Lägg in vilket spel du har och vilket/vilka du vill byta mot */}

            <div className="addFormButtons">
              <button className="closeButton">Avbryt</button>
              <button className="reviewButton">Granska annons</button>
            </div>

            {/* <div className="send-trade-button col-sm-12 offset-sm-0">
              <input
                className="send-request"
                type="submit"
                id="submitbutton"
                value="Skicka bytesförfrågan"
              />
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

/*
Knapp för att avbryta och granska annons
*/

export default AddForm;
