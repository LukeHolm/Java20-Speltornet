import React from 'react';


const GamePopup = props => {
    if (!props.show) {
        return null;
    }


    return (
        <div className="game-modal" onClick={props.onClose}>
            <div className="game-modal-content" onClick={e => e.stopPropagation()}>
            <span onClick={props.onClose} className="close">&times;</span>
                <div className="game-modal-header">
                    <div className="row">
                        <div className="col-sm-2 offset-sm-1"><img src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-28-5@2x.png" alt="Catan" className="game-modal-cover" /></div>
                        <div className="col-sm-6">
                            <h4 className="game-modal-title">Om {props.title}</h4>
                            <p className="game-modal-description">
                            Catan är en ö som spelarna ska kolonisera byar, städer och vägar, och på så vis erhålla poäng. Den som först får 10 poäng vinner spelet. Spelplanen är uppbyggd av ett antal hexagonformade brickor vars position kan variera från spel till spel.
                            </p>
                        </div>
                        <div className="col-sm-2" >
                            <h5 className="game-modal-review">Omdöme</h5>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <p className="game-modal-review">"Toppenspel"</p>
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <img src="Star_Rating.svg" alt="rating" className="star-rating"></img> 
                            <img src="Star_Rating2.svg" alt="rating" className="star-rating"></img>
                            <p className="game-modal-review">"Perfekt för familjen"</p>

                        </div>
                    </div>
                </div>
                <div className="game-modal-body">
                    <p>This text is in the body</p>
                </div>
                <div className="game-modal-footer">
                </div>
            </div>
        </div>
    )
}

export default GamePopup;