import React, { useEffect, useState } from 'react';
import gamesavailable from './gamesavailable.json'


const LoadData = () => {

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
    )
}

export default LoadData;