import { useParams } from 'react-router-dom';
import Footer from './Footer';
import HeaderThin from './HeaderThin';
import gamecatalog from './gamecatalog.json'
import LoadData from './LoadData';

const GameAdds = () => {

    const { gameId } = useParams();
    const gameTitle = JSON.stringify(gamecatalog.filter(gametitle => gametitle.id == gameId).map(title => title.title));

    //console.log(gameTitle);

    return (

        <>
            <HeaderThin />
            <div className="container">
                <LoadData gametitle={gameTitle} />
            </div>
            <div className="addBottom">
                <div className="container">
                    {gamecatalog.filter(game => game.id == gameId).map(filteredgame =>
                        <div className="row">

                            <div className="col-sm-2 offset-sm-1"><img src={filteredgame.imageURL} alt={filteredgame.title} className="game-modal-cover" /></div>
                            <div className="col-sm-5">
                                <h4 className="game-modal-title">Om {filteredgame.title}</h4>
                                <p className="game-modal-description">{filteredgame.description}</p>
                            </div>
                            <div className="col-sm-2" >
                                <div className="left-align">
                                    <h5>Spelets omdöme</h5>
                                    <h4 className="center-align">{filteredgame.rating}</h4>
                                </div>

                            </div>

                        </div>
                    )}
                </div>
            </div>


           
        </>
    )
}


export default GameAdds;