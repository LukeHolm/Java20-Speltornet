import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import HeaderThin from './HeaderThin';

const GameAdds = () => {

    const {id} = useParams();

    useEffect(() => {
        fetch("gamecatalog.json").then(response => response.json().then(data => setGamecards(data)))
    }, [])

    return (
        <>
            <HeaderThin />
            <div className="Container">
                <div className="row">
                    <div className="col addBox">
                        this is the first statement
            </div>
                </div>
            </div>


            <div className="addBottom">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-2 offset-sm-1"><img src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt=" " className="game-modal-cover" /></div>
                        <div className="col-sm-5">
                            <h4 className="game-modal-title">Om </h4>
                            <p className="game-modal-description">this is the description atpöäawjrföläaksnföl öalkshdn ölakshdö öaskhfdö lakshdöas hdäöas d</p>
                        </div>
                        <div className="col-sm-2" >
                        <div className="left-align">
                            <h5>Spelets omdöme</h5>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <p>"Toppenspel"</p>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img>
                            <img src="Star_Rating2.svg" alt="rating" className="star-rating"></img>
                            <p>"Perfekt för familjen"</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GameAdds;