import React from 'react'
import HeaderThin from './HeaderThin'
import Form from './Form'
import Topfooter from './Topfooter'
import Footer from './Footer'
import Changereceipt from './Changereceipt'
import LoadData from './LoadData';

const Details = () => {

    return (
            <>
                <HeaderThin />
                <div className="Row">
                    <div className="col-sm-8 offset-sm-2">
                        <LoadData/>
                        <Form/>
                    </div>
                </div>
                <Topfooter />
                <Footer />
            </>
        )
}

export default Details