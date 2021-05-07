import React, { useState } from "react";
import Camera from "./Camera";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

/*Skapa övre del med bilder (bl.a. en funktion slideshow) och text om spelet som ska bytas bort. 4 olika element*/
/*Färdigställa formuläret enligt utseende i Figma */

/*1. Spara variabler i en array (det som användaren fyller i) */
/*2. Skapa en nedfällningsfunktion(fold down?) med onClick (Du vill byta bort)*/
/*3. Skriva array/objekt till fil (databas)*/
//Validering

const Form = () => {
  let history = useHistory();

  const [headline, setHeadline] = useState("");
  const [greeting, setGreeting] = useState("");

  const postData = () => {
    fetch("data.json", {
      method: "POST",
      headers: {
        "data.json": "application/json",
      },
      //TODO: Lägg in fler variabler
      body: JSON.stringify({ headline: headline, greeting: greeting }),
    }).then((res) => res.json());
  };

  const submitForm = (event) => {
    // Hindrar formuläret från att ladda om sidan.
    event.preventDefault();
    postData();
    alert(["Rubrik: " + headline, "Hälsning: " + greeting]);
    console.log(greeting);

    //Är denna överflödig?
    const requestBody = {
      headline: headline,
      /*{lägg till fler här}*/
    };
  };

  return (
    <div className="wrapper">
      {/*Event är det som triggas av ett knapptryck (tex). 
            onSubmit är ett event i sig som kan säga att något ska triggas, kan skicka iväg sitt egna event.
            submitForm är JS-funktion som hämtar värden.   */}
      <form onSubmit={(event) => submitForm(event)}>
        <div className="col">
          <div className="form">
            {/* TODO: Bryta ut till egen komponent. */}
            <div className="form-element">
              <h4 className="form-text">Vad du vill byta mot Catan?</h4>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <p className="bold">Du vill ha</p>
                <input
                  type="radio"
                  id="radio"
                  name="boardgame"
                  value="myBoardgame"
                />

                {/*TODO: Spelnamnen ska ej vara hårdkodade. 
                        Styla radio buttons, se sparad länk */}
                <label for="myBoardgame" id="radio">
                  Catan
                </label>
              </div>

              <div className="col-sm-4 offset-1">
                <p className="bold">Du vill byta bort</p>
                <div className="tagg">Välj ett av alternativen nedanför:</div>
                {/*TODO: onClick...fold out function */}

                <input
                  type="radio"
                  id="radio"
                  name="trade"
                  value="otherBoardgame"
                />
                <label for="otherBoardgame">Ticket to ride</label>
                <input
                  type="radio"
                  id="radio"
                  name="trade"
                  value="otherBoardgame"
                />
                <label for="otherBoardgame">Monopol</label>
                <br></br>
                <input
                  type="radio"
                  id="radio"
                  name="trade"
                  value="otherBoardgame"
                />
                <label for="otherBoardgame">Diamanten</label>
                <input
                  type="radio"
                  id="radio"
                  name="trade"
                  value="otherBoardgame"
                />
                <label for="otherBoardgame">Game of thrones</label>
                <br></br>
                <input
                  type="radio"
                  id="radio"
                  name="trade"
                  value="otherBoardgame"
                />
                <label for="otherBoardgame">Risk</label>
                <br></br>
              </div>
            </div>

            {/* Delen som ska fällas ut... */}
            <h4 className="form-text form-element">Skicka förfrågan</h4>
            <div className="form-element">
              <h5>Rubrik på bytesformulär</h5>
              <input
                className="thin-textarea"
                type="text"
                id="headline"
                placeholder="Skriv här..."
                value={headline}
                onChange={(event) => setHeadline(event.target.value)}
              />
            </div>

            <h5>Skick på ditt spel:</h5>

            <div className="form-element">
              <h5>Slitage:</h5>
              <input type="radio" id="radio" name="gameCondition" value="new" />
              <label for="new" id="radio-text">
                Nyskick
              </label>

              <input
                type="radio"
                id="radio"
                name="gameCondition"
                value="littleWorn"
              />
              <label for="littleWorn" id="radio-text">
                Lite slitet
              </label>

              <input
                type="radio"
                id="radio"
                name="gameCondition"
                value="muchWorn"
              />
              <label for="muchWorn" id="radio-text">
                Mycket slitet
              </label>
            </div>
{/* 
            <div>
              <h5>Komponenter:</h5>
              <input
                type="radio"
                id="radio"
                name="gameComponents"
                value="new"
              />
              <label for="allParts" id="radio-text">
                Ingen del saknas
              </label>
              <input
                type="radio"
                id="radio"
                name="gameComponents"
                value="littleWorn"
              />
              <label for="partsMissing" id="radio-text">
                Delar saknas
              </label>
            </div> */}

            {/* Testdel radiobuttons */}
            <label className="radio">
              <span className="radio__input">
                <input type="radio" name="components" />
                <span className="radio__control"></span>
              </span>
              <span className="radio__label">Ingen del saknas</span>
            </label>

            <label className="radio">
              <span className="radio__input">
                <input type="radio" name="components" />
                <span className="radio__control"></span>
              </span>
              <span className="radio__label">Delar saknas</span>
            </label>

            <div className="form-element">
              <h5>Kommentarer</h5>
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
              ></textarea>
            </div>

            <div className="form-element">
              <h5>Hälsning</h5>
              <label for="greeting" className="p">
                Skriv en kort hälsning till bytaren!{" "}
              </label>
              <br />
              <input
                type="textarea"
                className="textarea"
                name="greeting"
                rows="5"
                cols="30"
                placeholder="Skriv här"
                value={greeting}
                onChange={(event) => setGreeting(event.target.value)}
              />
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

            <div className="form-element">
              <button
                className="cancel"
                onClick={() => {
                  if (window.confirm("Vill du verkligen avsluta?")) {
                    history.goBack(-1);
                  }
                }}
              >
                Avbryt
              </button>
              <input
                className="send-request"
                type="submit"
                id="submitbutton"
                value="Skicka bytesförfrågan"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
