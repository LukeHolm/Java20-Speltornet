import React, { useEffect, useState } from 'react';


const Changereceipt = (gameTitle) => {

    console.log(gameTitle)
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("gamesavailable(1).json").then(response => response.json().then(data => setGames(data)))
    }, [])

    const filterGames = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().indexOf(query) !== -1).map(game =>
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
        {filterGames(games, gameTitle)}
        </p>
    )
}

export default Changereceipt;