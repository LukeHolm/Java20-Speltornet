import React from 'react';
import '../App.css';
import Gamecard from '../components/Gamecard'
import Burger from '../components/Burger';
import Header from '../components/Header';
import Topfooter from '../components/Topfooter';

const Landingpage = ({gamecard}) => {

    return (
        <>
        <Header />
        <Burger />
        <Gamecard game={gamecard}/>
        <Topfooter />
        </>
    )
}

export default Landingpage;