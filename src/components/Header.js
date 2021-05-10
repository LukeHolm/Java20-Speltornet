import React from 'react';
import { Link } from 'react-router-dom';
import spelloga from '../img/Speltornet_Logga.svg'

const Header = () => {

    return (
        <header className="App-header">
            <div className="cont">
                <div className="row no-gutter">
                    <div className="col top-bar">
                        <div className="col-sm-1 offset-sm-0 speltornet-logga">
                            <img className="tornlogga" src={spelloga} alt="alt" />
                        </div>
                        <div className="speltornet">
                            Speltornet
                        </div>
                    </div>
                    <div className="col-sm-4 offset-sm-0">
                        <span className="top-bar-overlap">
                            <h1 className="motto">
                                Byt, spela, byt!
                            </h1>
                            <h2 className="motto-text">Spel ska <mark className="pink">spelas</mark>,<br /> inte stå och damma!</h2>
                            <h3 className="motto-text-forts"> Speltornet låter dig <mark className="pink">snabbt</mark> och <br /> <mark className="pink">enkelt</mark> byta begagnade brädspel.</h3>
                            <br /><br />
                            <Link to="/CreateAdd">
                                <button className="skapa-annons">Skapa annons <mark className="plus"> + </mark></button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;