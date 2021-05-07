import React from 'react';
import { useHistory } from 'react-router';
import gamecatalog from './gamecatalog.json'

const Gamecard = () => {
    let history = useHistory();

    return (
        <div className="container">
            {gamecatalog.map(gamecard => (
                <div className="box col col-md-3">

                    <img className="bild" src={gamecard.imageURL} alt={gamecard.title} />
                    <p className="spelnamn">{gamecard.title}</p>
                    <button className="knapp" onClick={() => history.push("/GameAdds/" + gamecard.id)}>Se annonser</button>
                </div>
            ))}
        </div>
    )
}
export default Gamecard;