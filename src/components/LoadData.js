import React, { useEffect, useState } from 'react';


const LoadData = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("gamesavailable.json").then(response => response.json().then(data => setGames(data)))
    }, [])

    const filterGames = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1).map(game =>
            <>
            <p>{game.title}</p>
            <p>{game.condition}</p>
            <p>{game.parts}</p>
            <p>{game.vbm} </p>
            <p>{game.conddesc}</p>

            <img className="bild" src={game.imageURL} alt={game.title}/>
            </>
            )
    }

    return (
        <>
        {filterGames(games, "Pandemic")}
        </>
    )
}

export default LoadData;