/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Camera from "./Camera";
import { useHistory } from "react-router-dom";
import RequestButton from "./RequestButton";

const Form = ({trading, tradingFor}) => {
  let history = useHistory();

  const [headline, setHeadline] = useState("");
  const [greeting, setGreeting] = useState("");
  const [condition, setCondtion] = useState("");
  const [partsMissing, setPartsMissing] = useState("");
  const [partsText, setPartsText] = useState("");

  const URL = "https://609a4cbe0f5a13001721a8af.mockapi.io/ContactForm";
  console.log(tradingFor);

  const submitForm = (event) => {
    event.preventDefault();

    const requestBody = {
      headline: headline,
      gameCondition: condition,
      missingParts: partsMissing,
      partsComment: partsText,
      greeting: greeting,
      image: [],
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((responseFromAPI) => {
      if (responseFromAPI.status === 404) {
        alert("Det gick fel, sidan finns inte");
      } 
      console.log(responseFromAPI.status);
      console.log(requestBody);
    });
  };

  return (
    <div className="wrapper">
      <form onSubmit={(event) => submitForm(event)}>
        <div className="col">
          <div className="form">
            {/* TODO: Bryta ut till egen komponent. */}
            <div className="form-element">
              <p className="line col-sm-11 offset-sm-0"></p>
              {/* TODO: Hämta in spelets namn */}
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
                value={partsText}
                onChange={(e) => setPartsText(e.target.value)}
              ></textarea>
            </div>

            <div className="form-element">
              <h5>Hälsning</h5>
              <label for="greeting" className="p">
                Skriv en kort hälsning till bytaren!{" "}
              </label>
              <br />
              <textarea
                type="textarea"
                className="textarea"
                name="greeting"
                rows="5"
                cols="30"
                placeholder="Skriv här..."
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

            <p className="text-form-bottom">
              Läs igenom och skicka din förfrågan.
              <br />
              Bytaren kommer därefter bli notifierad om din förfrågan.{" "}
            </p>

            <div className="send-trade-button col-sm-11 offset-sm-0">
              {/* <button
                className="cancel"
                onClick={() => {
                  if (window.confirm("Vill du verkligen avsluta?")) {
                    history.goBack(-1);
                  }
                }}
              >
                Avbryt
              </button> */}
              <button className="no-button" onClick={(event) => submitForm(event)}><RequestButton trading={trading} tradingFor={tradingFor}/></button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
