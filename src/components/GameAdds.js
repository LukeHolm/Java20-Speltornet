import { useParams } from 'react-router-dom';
import HeaderThin from './HeaderThin';
import LoadData from './LoadData';
import StarRating from './StarRating';

const GameAdds = ({gamecard, gameAdd}) => {

    const { gameId } = useParams();

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
                            <div className="col-sm-2 offset-sm-1" >
                                <div className="left-align">
                                    <h5>Spelets omdöme</h5>
                                    <h4 className="left-align"><StarRating rep={game.rating}/></h4>
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