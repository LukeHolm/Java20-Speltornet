import React from 'react';
import Loggainvert from '../img/Speltornet_Logga(1).svg'

const HeaderThin = () => {

    return (
        <header className="Thin-header">
            <div className="row">
                <div className="col-sm-1">
                    <img class="tornlogga-invert" src={Loggainvert} alt="alt">
                    </img>
                </div>
                <div className="col-sm-2 speltornet-vit">
                    Speltornet
                        </div>
            </div>


        </header>
    )
}

export default HeaderThin;