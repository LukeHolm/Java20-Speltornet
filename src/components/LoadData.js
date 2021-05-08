import { useHistory } from 'react-router';
import gamesAvailable from './gamesavailable.json'
import { Link, useParams } from 'react-router-dom'


const LoadData = fromGameAdds => {

    const gameTitle = JSON.stringify(fromGameAdds).slice(17, -5);
    let history = useHistory();

    console.log(fromGameAdds)
    console.log(gameTitle);

    return (
        <>

            <div className="container">

                <h3 className=" col-sm-8 offset-sm-1 addPresent">Annonser med {gameTitle}</h3>
                {gamesAvailable.filter(game => game.title == gameTitle).map(filteredgame =>
                    <Link to="/CreateAdd/">
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
                    </Link>
                )}
                <div className="col-sm-3 offset-sm-1 tillbaka-knapp">
                <button className="cancel" onClick={() => history.goBack(-1)}>Tillbaka</button>
                </div>
            </div>

        </>
    )
}

export default LoadData;