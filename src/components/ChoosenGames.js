import React, { useState } from "react";
import Form from "./Form";

const ChoosenGames = ({ gameAdd, addId}) => {

    const [show, setShow] = useState(false)

    const [vmb] = gameAdd.filter(add => add.addId == addId).map(game => game.tradeFor)
    const renderGame = gameAdd.find(add => add.addId == addId);

  return (
    <div className="container gamechoice col-sm-11 offset-sm-0">
      <div className="col-sm-11 offset-sm-2">
        <h4 className="form-text">Vad du vill byta mot {renderGame.gameTitle}?</h4>
      <div className="row">
        <div className="col-sm-2 col">
          <p className="bold">Du vill ha</p>
          <input type="radio" id="radio" name="boardgame" value="myBoardgame" checked={true} />

          {/*TODO: Spelnamnen ska ej vara hårdkodade. 
                  Styla radio buttons, se sparad länk */}
          <label for="myBoardgame" id="radio">
            {renderGame.gameTitle}
          </label>
        </div>

        <div className="col-sm-6 offset-1" >
          <p className="bold">Du vill byta bort</p>
          <div className="tagg">Välj ett av alternativen nedanför:</div>
          {/*TODO: onClick...fold out function */}

          {vmb.map(game =>
          <>
          <input type="radio" id={game} name="trade" value="otherBoardgame" onClick={() => setShow(!show) }>
          </input>
          <label for={game} id="radio-text">{game}</label>
          </>
          )}
          </div>
          { show && <Form />}
        </div>
      </div>
        
    </div>
  );
};

export default ChoosenGames;
