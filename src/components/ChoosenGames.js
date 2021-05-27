/* eslint-disable eqeqeq */
import React, { useState } from "react";
import Form from "./Form";

const ChoosenGames = ({ gameAdd, addId }) => {
  const [show, setShow] = useState(false);

  const [vmb] = gameAdd
    .filter((add) => add.addId == addId)
    .map((game) => game.tradeFor);
  const renderGame = gameAdd.find((add) => add.addId == addId);
  const [tradingFor, setTradingFor] = useState("");
  console.log(tradingFor);

  return (
    <div className="container gamechoice col-sm-11 offset-sm-0">
      <div className="col-sm-11 offset-sm-2">
        <h4 className="form-text">
          Vad du vill byta mot {renderGame.gameTitle}?
        </h4>
        <div className="row">
          <div className="col-sm-2 col">
            <p className="bold">Du vill ha</p>
            <input
              type="radio"
              id="radio"
              name="boardgame"
              value="myBoardgame"
              checked={true}
            />
            <label for="myBoardgame" id="radio">
              {renderGame.gameTitle}
            </label>
          </div>

          <div className="col-sm-6 offset-1">
            <p className="bold">Du vill byta bort</p>
            <div className="tagg">Välj ett av alternativen nedanför:</div>
            {vmb.map((game) => (
              <>
                <input
                  type="radio"
                  id={game}
                  name="trade"
                  value="otherBoardgame"
                  onClick={() => setShow(true)}
                  onChange={() => setTradingFor(game)}
                ></input>
                <label for={game} id="radio-text">
                  {game}
                </label>
              </>
            ))}
          </div>
          {show && (
            <Form
              trading={renderGame.gameTitle}
              tradingFor={tradingFor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChoosenGames;
