import { useHistory } from 'react-router';
import gamesAvailable from './gamesavailable.json'
import { Link, useParams } from 'react-router-dom'


const LoadData = ({gameTitle, gameAdd}) => {

    console.log(gameTitle)
    console.log(gameAdd)
    let history = useHistory();

    return (
        <>

            <div className="container">

                <h3 className=" col-sm-8 offset-sm-1 addPresent">Annonser med {gameTitle}</h3>
                {gameAdd.filter(game => game.gameTitle == gameTitle).map(add =>
                    <Link to="/CreateAdd/">
                    <div className="col-sm-5 smallAdd">
                        <>

                        {/* alla nedanstående "add."-referenser måste fixas i mockapi */}
                            <div className="col-sm-5">
                                <img className="addImg" src={add.imageURL} alt={add.gameTitle} />
                            </div>
                            <div className="col-sm-6">
                                <div className="location">{add.gameTitle} • {add.location}</div>
                                <p className="addDec">{add.addTitle}</p>
                                <p className="vbm">Vill byta mot:</p>
                                <p className="vbm-tag">{add.tradeFor}</p>
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