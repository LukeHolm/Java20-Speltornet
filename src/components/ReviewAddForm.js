// komponent för att granska annons innan publicering
// har ska fetchen mot Apin göras om annonsen godkäns

import HeaderThin from "./HeaderThin"
import Footer from './Footer'
import { useHistory } from "react-router"
import Condition from './Condition'



const ReviewAddForm = ({formData}) => {

    let history = useHistory()

    console.log(formData)



    return (
        <>
            <HeaderThin />
            <div className="container">
        <>
          <h2 className="detailTitle">Förhandsgranska annons</h2>
          <div className="row">
              <div className="col">
                  2. Granska annons
              </div>
            <div className="col-sm-4">
              <img className="detailBigImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_BILD.svg/1200px-Logo_BILD.svg.png" alt="FEL" />
            </div>
            <div className="col-sm-7">
              <div className="row userInfoBar">
                <div className="col-sm-1">
                  <img className="userProfileImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_BILD.svg/1200px-Logo_BILD.svg.png" alt="FEL" />
                </div>
                <div className="col-sm-6 userInfo">
                  <p className="userName">FEL<br />
                    <p className="tagg">Omdöme<br />"FEL"</p>
                  </p>
                </div>
                <div className=" col-sm-5">
                  <div className="detailLocation">"FEL" • "FEL"</div>
                </div>
              </div>
              <div className="row descriptionBox">
                <div className="col-sm-6">
                  <p className="bold">"FEL"</p>
                  <p>"FEL"</p>
                  <p className="bold">Skickbeskrivning</p>
                  <p>"FEL"</p>
                </div>
                <div className="col-sm-5 offset-sm-1">
                  {/* <p><Condition condition="FEL" missingParts="FEL"/></p> */}
                  <p className="bold">Frakt</p>
                  <p>"FEL"</p>
                  <p className="bold">Vill byta mot</p>
                  {/* {form.tradeFor.map(trade =>
                  <p>{trade}</p>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </>
        <button className="cancel" onClick={() => history.goBack(-1)}>AVBRYT</button>
        <button className="" onClick={true}>REDIGERA</button>
        <button className="" onClick={true}>GODKÄNN OCH PUBLICERA</button>
      </div>
      <Footer />
        </>
    )
}

export default ReviewAddForm