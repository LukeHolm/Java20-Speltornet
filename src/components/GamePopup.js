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
                        <div className="col-sm-2 offset-sm-1"><img src={props.imageURL} alt=" " className="game-modal-cover" /></div>
                        <div className="col-sm-6">
                            <h4 className="game-modal-title">Om {props.title}</h4>
                            <p className="game-modal-description">{props.description}</p>
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