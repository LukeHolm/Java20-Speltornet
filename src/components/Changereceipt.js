import React from 'react';


const Changereceipt = () => {

    return (

        <div className="changereceipt container align-items-center">
            <div className="row align-items-center">
                <div className="col-sm-3 receipt-border col-left">
                    <img className="userimage" src="https://s3-alpha-sig.figma.com/img/98c6/66ce/8ae82176109dda4c39d3986c6aeb9716?Expires=1620000000&Signature=bLsjnjEg9AWtDHHZaFfCPzaJsuwOt1ZkbHb~XItwqvJYvrSmVDAF28Jnr2JMowlhqcjBhUs7yZttvXAb-ZfBiy1iKkpBh0ajMm2~Dwzj~Llb2SmfrCB-q5muU2Aaw3YUTBVW2X6V-ZXye70-6Hzi41~EuV-ZFl2uYqAfy0YxhvTiLHi8sksRb7YkD97I1XSEOOYMosWb0dQ18uZQIc1RamFYlRn6c47FxdtzbUaHYV0KOZEi5trGIXE9wVEogdCI9NeeUCTx4Gr00kGtHXim9358buu0HWzaMShRsydBHVysgRlYsnSLHA2c4g7Rrej12eGLAyAR71ezkpDPfZXg9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="user"/>
                </div>
                <div className="col col-mid">
                    
                </div>
                <div className="col-sm-3 receipt-border col-right">
                    <h2 className="changegame">Vill byta mot</h2>
                    <button className="spel">Ticket to ride</button><br/>
                    <button className="spel">Monopol</button>
                </div>
            </div>
        </div>
    )
}

export default Changereceipt;