<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import gamesavailable from './gamesavailable.json'
=======
import { useHistory } from 'react-router';
import gamesAvailable from './gamesavailable.json'
>>>>>>> 5f7cbc34cb1915fd48ea34d76ccb2019cf7bc684


const LoadData = fromGameAdds => {

<<<<<<< HEAD
    //console.log(gameTitle)

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("gamesavailable(1).json").then(response => response.json().then(data => setGames(data)))
    }, [])

    const filterGames = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1).map(game =>
            <>
            <p>{game.title}</p>
            <p>{game.condition}</p>
            <p>{game.parts}</p>
            <p>{game.vbm} </p>

            <img className="bild" src={game.imageURL} alt={game.title}/>
            </>
            )
    }

    return (
        <p>
        {filterGames(games, "Pandemic")}
        </p>
=======
    const gameTitle = JSON.stringify(fromGameAdds).slice(17, -5);
    let history = useHistory();

    console.log(gameTitle);

    return (
        <>

            <div className="container">

                <h3 className=" col-sm-8 offset-sm-1 addPresent">Annonser med {gameTitle}</h3>
                {gamesAvailable.filter(game => game.title == gameTitle).map(filteredgame =>
                    <div className="col-sm-5 smallAdd">
                        <>
                            <div className="col-sm-5">
                                <img className="addImg" src={filteredgame.imageURL} alt={filteredgame.title} />
                            </div>
                            <div className="col-sm-6">
                                <div className="location">{filteredgame.title} • {filteredgame.location}</div>
                                <p className="addDec">{filteredgame.addtitle}</p>
                                <p className="vbm">Vill byta mot:</p>
                                <p className="vbm-tag">{filteredgame.vbm}</p>
                            </div>
                        </>
                    </div>
                )}
                <div className="col-sm-3 offset-sm-1 tillbaka-knapp">
                <button className="cancel" onClick={() => history.goBack(-1)}>Tillbaka</button>
                </div>
            </div>

        </>
>>>>>>> 5f7cbc34cb1915fd48ea34d76ccb2019cf7bc684
    )
}

export default LoadData;