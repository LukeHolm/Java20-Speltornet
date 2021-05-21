import { useHistory } from 'react-router';


const LoadData = ({gameTitle, gameAdd}) => {

    console.log(gameTitle)
    console.log(gameAdd)
    let history = useHistory();

    return (
        <>
            <div className="container">
                <h3 className=" col-sm-8 offset-sm-0 addPresent">Annonser med {gameTitle}</h3>
                {gameAdd.filter(game => game.gameTitle == gameTitle).map(add =>
                    <div className="col-sm-5 smallAdd" onClick={() => history.push("/Details/" + add.addId)}>
                        <>
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
                )}
                <div className="col-sm-3 offset-sm-0 tillbaka-knapp">
                <button className="cancel" onClick={() => history.goBack(-1)}>Tillbaka</button>
                </div>
            </div>
        </>
    )
}

export default LoadData;