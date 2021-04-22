import React from 'react';
import tornloggareverst from '../img/Speltornet_Logga(1).svg'

const HeaderThin = () => {

    return (
        <header className="Thin-header">
            <div className="cont">                
                    <div className="col thin-top-bar">
                        <div className="col-sm-1 offset-sm-0 speltornet-logga">
                            <img className="tornlogga-inverterad" src={tornloggareverst} alt="alt">
                            </img>
                        </div>
                        <div className="speltornet-vit">
                            Speltornet
                        </div>
                    </div>
                </div>
           
        </header>
    )
}

export default HeaderThin;