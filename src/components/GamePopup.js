import React from 'react';


const GamePopup = props => {
    if (!props.show) {
        return null;
    }


    return (
        <div className="game-modal" onClick={props.onClose}>
            <div className="game-modal-content" onClick={e => e.stopPropagation()}>
                <div className="game-modal-header">
                    <h1 className="game-modal-title">{props.title}</h1>
                </div>
                <div className="game-modal-body">
                    {props.children}
                </div>
                <div className="game-modal-footer">
                <button onClick={props.onClose} className="game-modal-closebtn">Close</button>               
                </div>
            </div>
        </div>
    )
}

export default GamePopup;