import gamesAvailable from './gamesavailable.json'


const LoadData = fromGameAdds => {

    const gameTitle = JSON.stringify(fromGameAdds).slice(17,-5);

    console.log(gameTitle);

   

    return (
        <>
        {gamesAvailable.filter(game => game.title == gameTitle).map(filteredgame => 
        <div>
            <p>{filteredgame.title}</p>
            <p>{filteredgame.condition}</p>
            <p>{filteredgame.parts}</p>
            <p>{filteredgame.vbm} </p>
            <p>{filteredgame.conddesc}</p>
            <img className="bild" src={filteredgame.imageURL} alt={filteredgame.title}/>
            </div>)}
        </>
    )
}

export default LoadData;