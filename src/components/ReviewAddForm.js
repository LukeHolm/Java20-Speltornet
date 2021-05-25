// komponent för att granska annons innan publicering
// har ska fetchen mot Apin göras om annonsen godkäns

import HeaderThin from "./HeaderThin"
import Footer from './Footer'
import { useHistory } from "react-router"
import Condition from './Condition'



const ReviewAddForm = ({form}) => {

    let history = useHistory()



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
              <img className="detailBigImage" src={form.img} alt={form.gameTitle} />
            </div>
            <div className="col-sm-7">
              <div className="row userInfoBar">
                <div className="col-sm-1">
                  <img className="userProfileImg" src={form.img} alt={form.userName} />
                </div>
                <div className="col-sm-6 userInfo">
                  <p className="userName">{form.userName}<br />
                    <p className="tagg">Omdöme<br />{form.rep}</p>
                  </p>
                </div>
                <div className=" col-sm-5">
                  <div className="detailLocation">{form.gameTitle} • {form.location}</div>
                </div>
              </div>
              <div className="row descriptionBox">
                <div className="col-sm-6">
                  <p className="bold">{form.addTitle}</p>
                  <p>{form.addDescription}</p>
                  <p className="bold">Skickbeskrivning</p>
                  <p>{form.conditionDescription}</p>
                </div>
                <div className="col-sm-5 offset-sm-1">
                  <p><Condition condition={form.condition} missingParts={form.missingParts}/></p>
                  <p className="bold">Frakt</p>
                  <p>{form.shipping}</p>
                  <p className="bold">Vill byta mot</p>
                  {form.tradeFor.map(trade =>
                  <p>{trade}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
        <button className="cancel" onClick={() => history.goBack(-1)}>AVBRYT</button>
        <button className="" onClick={}>REDIGERA</button>
        <button className="" onClick={}>GODKÄNN OCH PUBLICERA</button>
      </div>
      <Footer />
        </>
    )
}

export default ReviewAddForm