import React from 'react';
import Loggainvert from '../img/Speltornet_Logga(1).svg'
import {Link} from 'react-router-dom'

const HeaderThin = () => {

    return (
        <header className="Thin-header">
            <div className="row">
                <div className="col-sm-1">
                    <Link to="/">
                    <img class="tornlogga-invert" src={Loggainvert} alt="alt" />
                    </Link>
                </div>
                <div className="col-sm-2 speltornet-vit">
                    Speltornet
                        </div>
            </div>


        </header>
    )
}

export default HeaderThin;