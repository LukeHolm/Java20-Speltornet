import { useParams } from 'react-router-dom';
import Footer from './Footer';
import HeaderThin from './HeaderThin';
import LoadData from './LoadData';

const GameAdds = ({gamecard, gameAdd}) => {

    const { gameId } = useParams();
    console.log(gamecard);
    console.log(gameAdd);

    return (

        <>
            <HeaderThin />
            <div className="container">
                {gamecard.filter(game => game.id == gameId).map(game => 
                <LoadData gameTitle={game.title} gameAdd={gameAdd}/>
                )}
            </div>
            <div className="addBottom">
                <div className="container">
                    {gamecard.filter(game => game.id == gameId).map(game =>
                        <div className="row">

                            <div className="col-sm-2 offset-sm-1"><img src={game.imageURL} alt={game.title} className="game-modal-cover" /></div>
                            <div className="col-sm-5">
                                <h4 className="game-modal-title">Om {game.title}</h4>
                                <p className="game-modal-description">{game.description}</p>
                            </div>
                            <div className="col-sm-2" >
                                <div className="left-align">
                                    <h5>Spelets omdöme</h5>
                                    <h4 className="center-align">{game.rating}</h4>
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