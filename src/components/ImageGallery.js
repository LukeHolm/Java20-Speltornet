import React, { useState, useEffect } from 'react';

import Back from "../img/back.svg"
import Next from "../img/next.svg"


const ImageGallery = ({ add }) => {

    const [imageNumber, setImageNumber] = useState(0);
    const numberOfImages = add.imageURL.length - 1;
    const [prevImage, setPrevImage] = useState(numberOfImages);
    const [nextImage, setNextImage] = useState(1);

    console.log(numberOfImages);

    useEffect(() => {
        if(numberOfImages === 0){
            setNextImage(0)
        }
    }, [])

    const Backwards = () => {
        if(imageNumber === 0) {
            setImageNumber(numberOfImages);
        } else {
            setImageNumber(imageNumber -1);
        }
    }

    const Forwards = () => {
        if(imageNumber === numberOfImages) {
            setImageNumber(0);

        } else {
            setImageNumber(imageNumber + 1);
        }
    }

    return (
        <>
            <img className="detailBigImage" src={add.imageURL[imageNumber]} alt={add.addTitle} />
            <img className="imageSwitcher" src={Back} alt="back" onClick={Backwards}/>
            <img className="imageSwitcher" src={add.imageURL[prevImage]} alt={add.addTitle} />
            <img className="imageSwitcher" src={add.imageURL[0]} alt={add.addTitle} />
            <img className="imageSwitcher" src={add.imageURL[nextImage]} alt={add.addTitle} />
            <img className="imageSwitcher" src={Next} alt="next" onClick={Forwards} />
        </>
    )

}

export default ImageGallery;