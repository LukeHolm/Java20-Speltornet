import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import HeaderThin from "./HeaderThin";
import Topfooter from "./Topfooter";
import Footer from "./Footer";

const Details = ({ gameAdd }) => {

  const { addId } = useParams();
  let history = useHistory();

  return (
    <>
      <HeaderThin />
      <div className="container">
        {gameAdd.filter(add => add.addId == addId).map(add =>
          <div className="row testaren">
            <div className="col-sm-4 testaren">
              <img className="bild" src={add.imageURL} alt={add.gameTitle} />
            </div>
            <div className="col-sm-8 testaren">
              <div className="row testaren">
                <br />
              </div>
              <div className="row testaren">
                <div className="col-sm-6 testaren">
                  <p className="bold">{add.addTitle}</p>
                  <p>{add.addDescription}</p>
                  <p className="bold">Skickbeskrivning</p>
                  <p>{add.conditionDescription}</p>
                </div>
                <div className="col-sm-5 offset-sm-1 testaren">
                  <p>{add.condition}</p>
                  {/* <p><MissingParts missingParts={add.missingParts}/></p> */}
                  <p className="bold">Frakt</p>
                  <p>{add.shipping}</p>
                  <p className="bold">Vill byta mot</p>
                  <p>{add.tradeFor}</p>
                </div>
              </div>
            </div>


          </div>
        )}
        <button className="cancel" onClick={() => history.goBack(-1)}>Tillbaka</button>
      </div>
      <Topfooter />
      <Footer />
    </>
  );
};

export default Details;