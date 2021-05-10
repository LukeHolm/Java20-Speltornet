import React from 'react'
import dice1 from '../img/D6r1.svg'
import dice2 from '../img/D6r2.svg'
import dice3 from '../img/D6r3.svg'

const Topfooter = () => {

    return (
        <div className="body-bottom">
            <h2 className="body-bottom-header">Hur funkar det?</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="dice" id="dice-one" src={dice1} alt="Tärning 1"></img>
                        <h5 className="body-bottom-text">Välj ut ett spel från sidan du är intresserad av.</h5>
                    </div>
                    <div className="col">
                        <img className="dice" id="dice-two" src={dice2} alt="Tärning 2"></img>
                        <h5 className="body-bottom-text">Läs detaljinformationen om spelet och spelets skick. Kontakta därefter bytaren.</h5>
                    </div>
                    <div className="col">
                        <img className="dice" id="dice-three" src={dice3} alt="Tärning 3"></img>
                        <h5 className="body-bottom-text">Kom överens om byte och bestäm leverans, alternativt om ni möts upp för att byta spelen.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topfooter;