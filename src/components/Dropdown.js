import React from 'react'

 {/* Testkod dropdown från https://www.youtube.com/watch?v=elC357w9VOA*/}
export default function Dropdown({gamecard}) {
    return (
        <div className="dropdown">
        <div className="control">
          <div className="selected-value">Välj spel...</div>
          <div className="arrow"></div>
        </div>
        <div className="options">
            {gamecard.map((gametitle) => (<div className="option">{gametitle.title}</div>))}          
        </div>
      </div>   
    )
}









           
