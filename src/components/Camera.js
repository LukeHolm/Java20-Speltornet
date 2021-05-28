import React from 'react'

const camera = ({img}) => {

    console.log(img);

    if (img === undefined) {
        return (
            <div className="">
                <i className="camera fas fa-camera"></i>
                <p className="camera-text">Lägg till bild</p>
            </div>
        )
    } else {
        return (
            <div>
                <img src={img} alt="din bild" className="uploaded-img"/>
            </div>
        )
    }
}

    export default camera;