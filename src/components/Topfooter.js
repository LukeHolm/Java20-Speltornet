import React from 'react'

const Topfooter = () => {

    return (
        <div className="body-bottom">
            <h1 className="body-bottom-header">Hur funkar det?</h1>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img className="dice" id="dice-one" src="D6r1.svg" alt="Tärning 1"></img>
                        <h5 className="body-bottom-text">Välj ut ett spel från sidan du är intresserad av.</h5>
                    </div>
                    <div class="col">
                        <img className="dice" id="dice-two" src="D6r2.svg" alt="Tärning 2"></img>
                        <h5 className="body-bottom-text">Läs detaljinformationen om spelet och spelets skick. Kontakta därefter bytaren.</h5>
                    </div>
                    <div class="col">
                        <img className="dice" id="dice-three" src="D6r3.svg" alt="Tärning 3"></img>
                        <h5 className="body-bottom-text">Kom överens om byte och bestäm leverans, alternativt om ni möts upp för att byta spelen.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topfooter;