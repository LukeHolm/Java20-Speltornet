import React from "react";
import { useHistory } from "react-router";
import GameAdds from "./GameAdds";

const Gamecard = ({game}) => {
  let history = useHistory();

  <GameAdds game={game} />
  console.log(game)


  return (
    <div className="container">
      <h1 className="speltorget col-sm-4 offset-sm-0">Speltorget</h1>
      {game.map( game =>
        <div className="box col col-md-3" onClick={() => history.push("/GameAdds/" + game.id)}>
          <img className="bild" src={game.imageURL} alt={game.title} />
          <p className="spelnamn">{game.title}</p>
          <button className="knapp" onClick={() => history.push("/GameAdds/" + game.id)}>
            Se annonser
          </button>
        </div>
        )}
    </div>
  );
};

export default Gamecard;
