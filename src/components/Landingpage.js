import React from 'react';
import '../App.css';
import Gamecard from '../components/Gamecard'
import Burger from '../components/Burger';
import Header from '../components/Header';
import Topfooter from '../components/Topfooter';
import Footer from '../components/Footer';
import Changereceipt from './Changereceipt';

const Landingpage = () => {

    return (
        <>
        <Header />
        <Burger />
        <h1 className="speltorget col-sm-2 offset-sm-2">Speltorget</h1>
        <Gamecard />
        <Topfooter />
        <Footer />
        </>
    )
}

export default Landingpage;