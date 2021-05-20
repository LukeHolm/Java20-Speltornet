import React, { useState } from "react";
import Form from "./Form";

const ChoosenGames = ({ gameAdd }) => {


    let addId = 3;

    const [show, setShow] = useState(false)

  return (
    <div className="container">
        {gameAdd.filter(add => add.addId == addId).map(game =>
      <div className="row">
        <div className="col-sm-2">
          <p className="bold">Du vill ha</p>
          <input type="radio" id="radio" name="boardgame" value="myBoardgame" checked={true} />

          {/*TODO: Spelnamnen ska ej vara hårdkodade. 
                  Styla radio buttons, se sparad länk */}
          <label for="myBoardgame" id="radio">
            {game.gameTitle}
          </label>
        </div>

        <div className="col-sm-4 offset-1" >
          <p className="bold">Du vill byta bort</p>
          <div className="tagg">Välj ett av alternativen nedanför:</div>
          {/*TODO: onClick...fold out function */}

          <input type="radio" id="otherBoardgame" name="trade" value="otherBoardgame" onClick={() => setShow(true) }>
          </input>
          <label for="otherBoardgame">Ticket to ride</label>
          { show && <Form />}
          
          <input type="radio" id="otherBoardgame1" name="trade" value="otherBoardgame" />
          <label for="otherBoardgame1">Monopol</label>
          <br></br>
          <input type="radio" id="otherBoardgame2" name="trade" value="otherBoardgame" />
          <label for="otherBoardgame2">Diamanten</label>
          <input type="radio" id="otherBoardgame3" name="trade" value="otherBoardgame" />
          <label for="otherBoardgame3">Game of thrones</label>
          <br></br>
          <input type="radio" id="otherBoardgame4" name="trade" value="otherBoardgame" />
          <label for="otherBoardgame4">Risk</label>
          <br></br>
        </div>
      </div>
        )}
    </div>
  );
};

export default ChoosenGames;
