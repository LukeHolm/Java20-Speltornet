import React, { useState, useRef } from "react";

import Camera from "./Camera";
import AddReview from "./AddReview";
import CancelButton from "./CancelButton";
import PublishButton from "./PublishButton";

const AddForm = ({ gamecard }) => {
  const [chooseGame, setChooseGame] = useState("");
  const [headline, setHeadline] = useState("");
  const [salesPitch, setSalesPitch] = useState("");
  const [gameCondition, setCondtion] = useState("");
  const [partsMissing, setPartsMissing] = useState("");
  const [partsText, setPartsText] = useState("");
  const [delivery, setDelivery] = useState("");
  const [desiredGame, setDesiredGame] = useState("");
  const [gamesWanted, setGamesWanted] = useState([]);
  const [show, setShow] = useState("form");

  const [showURL, setShowURL] = useState(false);
  const [picURL, setPicURL] = useState([]);
  const [picURL2, setPicURL2] = useState();
  const picURLRef = useRef()

  function handlePicURL(e) {
    const adress = picURLRef.current.value
    if (adress === '') return
    setPicURL(prevPicURL => {
      console.log(adress)
      return [...prevPicURL, adress]
    })
    picURLRef.current.value = null
    setPicURL2([])
  }


  const testUser = {
    userId: 7,
    firstName: "Dummy",
    lastName: "User",
    userName: "DummyUser",
    rep: 5,
    img: "https://i.ebayimg.com/images/g/RSkAAOSwd0ha-yKd/s-l400.jpg",
    location: "Stockholm",
  };

   const requestBody = {
     userId: testUser.userId,
     gameTitle: chooseGame,
     addTitle: headline,
     addDescription: salesPitch,
     condition: gameCondition,
     conditionDescription: partsText,
     missingParts: partsMissing,
     tradeFor: gamesWanted,
     shipping: delivery,
     location: testUser.location,
     imageURL: picURL,
   };


  const URL = "https://609a4cbe0f5a13001721a8af.mockapi.io/gamesavailable";

  const submitForm = (event) => {
    event.preventDefault();

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
      console.log("HEHEHEEHEHEH", responseFromAPI.status);
      console.log(requestBody);
    });
  };

  if (show === "form") {
    return (
      <div className="wrapper">
        <div className="container">
          <form onSubmit={(event) => submitForm(event)}>
            <div className="col-sm-12 form">
              <h2 id="createAdd">Skapa annons</h2>
              <p>
                Ladda upp ditt spel på Speltornet. Du kommer därefter få
                <br />
                bytesförfrågningar från andra användare. Efter att du godkänt en
                <br />
                bytesförfrågan genomför ni bytet!
              </p>
              <div className="onetwothree">
                <p className="bold spacer-thirtyfive" id="create-add">
                  1. Skapa annons
                </p>
                <p className="bold spacer-thirtyfive">2. Granska annons</p>
                <p className="bold spacer-thirtyfive">3. Publicera</p>
              </div>
            </div>

            <div className="formCol" id="form-box">
              <div className="col-sm-9 form">
                <div className="form-element">
                  {/*Tom div som skapar space*/}
                </div>
                <div className="form-element">
                  {/*Tom div som skapar space*/}
                </div>
                <div className="form-element">
                  <h5>Vilket spel vill du byta bort?</h5>
                  <select
                    id="chooseGame"
                    required
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
                {/* <p className="bold">
                  Valt spel (ska bara synas efter man valt spel)
            </p> */}
                {/* Lägg in valt spel här */}

                <div className="form-element">
                  <h5>Rubrik</h5>
                  <input
                    className="thin-textarea"
                    type="text"
                    id="headline"
                    required
                    placeholder="Skriv här..."
                    value={headline}
                    onChange={(event) => setHeadline(event.target.value)}
                  />
                </div>
                <div className="form-element">
                  <h5>Text</h5>
                  <label for="greeting"></label>
                  <textarea
                    type="textarea"
                    className="textarea"
                    name="greeting"
                    required
                    rows="5"
                    cols="30"
                    placeholder="Skriv här..."
                    value={salesPitch}
                    onChange={(event) => setSalesPitch(event.target.value)}
                  />
                  <br />
                </div>
                <hr />
                <h5>Skick på ditt spel:</h5>
                <br />
                <div className="form-element">
                  <h5>Slitage</h5>
                  <input
                    type="radio"
                    id="Nyskick"
                    name="gameCondition"
                    required
                    value="Nyskick"
                    checked={gameCondition === "Nyskick"}
                    onChange={(e) => {
                      setCondtion(e.target.value);
                    }}
                  />
                  <label for="Nyskick" id="radio-text">
                    Nyskick
                  </label>

                  <input
                    type="radio"
                    id="Lite slitet"
                    name="gameCondition"
                    value="Lite slitet"
                    checked={gameCondition === "Lite slitet"}
                    onChange={(e) => {
                      setCondtion(e.target.value);
                    }}
                  />
                  <label for="Lite slitet" id="radio-text">
                    Lite slitet
                  </label>

                  <input
                    type="radio"
                    id="Mycket slitet"
                    name="gameCondition"
                    value="Mycket slitet"
                    checked={gameCondition === "Mycket slitet"}
                    onChange={(e) => {
                      setCondtion(e.target.value);
                    }}
                  />
                  <label for="Mycket slitet" id="radio-text">
                    Mycket slitet
                  </label>
                </div>

                <div className="form-element">
                  <h5>Komponenter:</h5>
                  <input
                    type="radio"
                    id="no"
                    name="components"
                    required
                    value="no"
                    checked={partsMissing === false}
                    onChange={() => {
                      setPartsMissing(false);
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
                    checked={partsMissing === true}
                    onChange={() => {
                      setPartsMissing(true);
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
                    required
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
                    <div onClick={() => setShowURL(!showURL)}>
                      <Camera img={requestBody.imageURL[0]}/>
                    </div>
                    <div onClick={() => setShowURL(!showURL)}>
                      <Camera img={requestBody.imageURL[1]}/>
                    </div>
                    <div onClick={() => setShowURL(!showURL)}>
                      <Camera img={requestBody.imageURL[2]}/>
                    </div>
                    <div onClick={() => setShowURL(!showURL)}>
                      <Camera img={requestBody.imageURL[3]}/>
                    </div>
                    <div onClick={() => setShowURL(!showURL)}>
                      <Camera img={requestBody.imageURL[4]}/>
                    </div>
                  </div>
                  <div className="form-element">
                  {showURL && 
                    <>
                  <h5 className="urllink">Bild-URL</h5>
                  <input
                    className="thin-textarea"
                    ref={picURLRef}
                    type="text"
                    id="headline"
                    placeholder="URL..."
                    value={picURL2}
                    onChange={(event) => setPicURL2(event.target.value)}
                  />

                  <button type="button" className="save-button" onClick={handlePicURL}>ladda upp bild</button>
                  </>
                  }
                </div>
                </div>
                <hr />
                <h5>Föredraget leveranssätt för byte av spel</h5>
                <div className="form-element checkbox row">
                  <div className="col-sm-4">
                    <input
                      type="checkbox"
                      name="delivery"
                      id="postnord"
                      value="postnord"
                      required
                      checked={delivery === "postnord"}
                      onChange={(e) => setDelivery(e.target.value)}
                    ></input>
                    <label for="postnord" id="checkbox-text">
                      Postnord
                    </label>
                    <br />
                    <br />
                    <input
                      type="checkbox"
                      name="delivery"
                      id="avhämtning"
                      value="avhämtning"
                      required
                      checked={delivery === "avhämtning"}
                      onChange={(e) => setDelivery(e.target.value)}
                    ></input>
                    <label for="avhämtning" id="checkbox-text">
                      Avhämtning
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <tagg>(fr. 36 SEK)</tagg>
                    <p className="detailText">
                      Vid byte bokar du frakten genom postnord.se
                    </p>
                    <tagg>(Gratis)</tagg>
                    <p className="detailText">
                      Vid byte bestämmer du träff med bytaren.
                    </p>
                  </div>
                </div>
                <hr />
                <h4 className="form-text form-element">
                  Vad vill du ha i utbyte mot ditt spel?
                </h4>
                <div className="formExchange">
                  <div className="col-sm-4">
                    <h5>Du har</h5>
                    {chooseGame.length > 1 && (
                      <div>
                        <input className="radio-special"
                          type="radio"
                          id="radio"
                          name="boardgame"
                          value="myBoardgame"
                          checked={true}
                        />
                        <label for="myBoardgame" id="radio">
                          {chooseGame}
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="col-sm-1">
                    <div>
                      <div className="greyElement"></div>
                      <div className="smallGreyElement"></div>
                    </div>
                  </div>
                  <div className="col-sm-7 wanted-games" >
                    <h5>Du vill ha</h5>
                    <input className="radio-special"
                      type="radio"
                      id="vbm"
                      name="desiredGame"
                      required
                      value="Önska specifikt spel"
                      checked={desiredGame === false}
                      onChange={() => {
                        setDesiredGame(false);
                        setGamesWanted([]);
                      }}
                    />
                    <label for="vbm" id="radio-text" className="radio-special-text">
                      Önska specifika spel
                    </label>
                    <div className="detailText bold specificGame">Max 5 specifika spel</div>
                    <select
                      id="gamesWanted"
                      required
                      value={[gamesWanted]}
                      onChange={(event) =>
                        setGamesWanted([...gamesWanted, event.target.value])
                      }
                    >
                      <option value="">Välj spel...</option>
                      {gamecard.map((title) => (
                        <option>{title.title}</option>
                      ))}
                    </select>
                    <p className="vbmform">Valda spel:</p>
                    {gamesWanted.length > 0 && (
                      <div className="">
                        {gamesWanted.map((title) => (
                          <p className="vbm-tag">{title}</p>
                        ))}
                      </div>
                    )}
                    <br />
                    <button type="button" className="cross" onClick={() => setGamesWanted([])}><div className="x-mark">x</div></button>
                    <hr/>
                    {/* <button
                    type="button"
                      className="cancel"
                      onClick={() => setGamesWanted([])}>
                      Rensa spel
                    </button> */}
                    
                    <input className="radio-special"
                      type="radio"
                      id="vbm-any"
                      name="desiredGame"
                      value="Öppen för förslag"
                      checked={desiredGame === true}
                      onChange={() => {
                        setGamesWanted(["Öppen för förslag"])
                        setDesiredGame(true);
                      }}
                    />
                    <label for="vbm-any" id="radio-text" className="radio-special-text">
                      Jag vill få förslag på spel
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="row separate">
            <CancelButton id="closeButton" />
            <button className="reviewButton" onClick={() => setShow("review")}>
              Granska annons
            </button>
          </div>
        </div>
      </div>
    );
  } else if (show === "review") {
    return (
      <div className="container">
        <div className="col-sm-12 form">
          <h2 id="createAdd">Förhandsgranska annons</h2>
          <div className="onetwothree-two">
            <p className="bold spacer-thirtyfive">1. Skapa annons</p>
            <p className="bold spacer-thirtyfive" id="create-add">
              2. Granska annons
            </p>
            <p className="bold spacer-thirtyfive">3. Publicera</p>
          </div>
        </div>
        <AddReview addData={requestBody} user={testUser} />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <CancelButton />
            </div>
            <div className="col-sm-8 right-align">
              <button className="editButton" onClick={() => setShow("form")}>
                {" "}
                Redigera
              </button>
              <button
                className="no-button"
                onClick={(event) => submitForm(event)}
              >
                <PublishButton
                  trading={requestBody.gameTitle}
                  tradingFor={requestBody.tradeFor}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="form-element">{/*Tom div som skapar space*/}</div>
      </div>
    );
  }
};

export default AddForm;
