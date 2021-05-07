import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import HeaderThin from './HeaderThin';
import gamecatalog from './gamecatalog.json'
import LoadData from './LoadData';

const GameAdds = () => {

    const { gameId } = useParams();

    console.log(gamecatalog);

    return (

        <>
            <HeaderThin />
            <div className="Container">

                <div className="row">
                    <div className="col addBox">

                         {gamecatalog.filter(game => game.id == gameId).map(filter =>
                            // console.log(filter.title) 
                            <LoadData title={filter.title}/>    
                        )}
                        
                        
                        {/* {gamecatalog.filter(game => game.id == gameId).map(filteredgame =>
                        <p>
                            {filteredgame.title}
                        </p>
                        )} */}
                    </div>
                </div>
            </div>
            <div className="addBottom">

                <div className="container">
                    {gamecatalog.filter(game => game.id == gameId).map(filteredgame =>
                        <div className="row">

                            <div className="col-sm-2 offset-sm-1"><img src={filteredgame.imageURL} alt=" " className="game-modal-cover" /></div>
                            <div className="col-sm-5">
                                <h4 className="game-modal-title">Om {filteredgame.title}</h4>
                                <p className="game-modal-description">{filteredgame.description}</p>
                            </div>
                            <div className="col-sm-2" >
                                <div className="left-align">
                                    <h5>Spelets omdöme</h5>
                                    <h5>{filteredgame.rating}</h5>
                                </div>

                            </div>

                        </div>
                    )}
                </div>
            </div>


            <Footer />
        </>
    )
}


export default GameAdds;