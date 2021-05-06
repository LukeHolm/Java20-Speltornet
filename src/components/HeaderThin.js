import React from 'react';
import Loggainvert from '../img/Speltornet_Logga(1).svg'
import {Link} from 'react-router-dom'
import Burger from './Burger'

const HeaderThin = () => {

    return (
        <header className="Thin-header">
            <Burger/>
            <div className="row">
                <div className="col-sm-1">
                    <Link to="/">
                    <img className="tornlogga-invert" src={Loggainvert} alt="alt" />
                    </Link>
                </div>
                <div className="col-sm-1 speltornet-vit">
                    Speltornet
                        </div>
            </div>


        </header>
    )
}

export default HeaderThin;