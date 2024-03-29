import React from "react";
import { useHistory, useParams } from 'react-router-dom';

import HeaderThin from "./HeaderThin";
import Topfooter from "./Topfooter";
import Footer from "./Footer";
import Condition from "./Condition";
import ChoosenGames from "./ChoosenGames";
import ImageGallery from "./ImageGallery";
import StarRating from "./StarRating"

const Details = ({ gameAdd, users }) => {

  const { addId } = useParams();
  let history = useHistory();

  const renderAdd = gameAdd.find(add => add.addId == addId);
  const renderUser = users.find(user => user.userId == renderAdd.userId);

  return (
    <>
      <HeaderThin />
      <div className="container">
        <>
          <h2 className="detailTitle">{renderAdd.gameTitle}</h2>
          <div className="row">
            <div className="col-sm-4">
              <ImageGallery add={renderAdd}/>
            </div>
            <div className="col-sm-7">
              <div className="row userInfoBar">
                <div className="col-sm-1">
                  <img className="userProfileImg" src={renderUser.img} alt={renderUser.userName} />
                </div>
                <div className="col-sm-6 userInfo">
                  <p className="userName">{renderUser.userName}<br />
                    <p className="tagg omdome">Omdöme<br /><StarRating rep={renderUser.rep}/></p>
                  </p>
                </div>
                <div className=" col-sm-5">
                  <div className="detailLocation">{renderAdd.gameTitle} • {renderAdd.location}</div>
                </div>
              </div>
              <div className="row descriptionBox">
                <div className="col-sm-6">
                  <p className="bold">{renderAdd.addTitle}</p>
                  <p>{renderAdd.addDescription}</p>
                  <p className="bold">Skickbeskrivning</p>
                  <p>{renderAdd.conditionDescription}</p>
                </div>
                <div className="col-sm-5 offset-sm-1">
                  <br/>
                  <p><Condition condition={renderAdd.condition} missingParts={renderAdd.missingParts}/></p>
                  <p className="tagg-bold five-margin-bottom">Frakt</p>
                  <p className="tagg">{renderAdd.shipping}</p>
                  <p className="bold five-margin-bottom">Vill byta mot</p>
                  {renderAdd.tradeFor.map(trade =>
                  <p className="vbm-tag">{trade}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
        <ChoosenGames gameAdd={gameAdd} addId={renderAdd.addId} />
        <button className="cancel" onClick={() => history.goBack(-1)}>Tillbaka</button>
      </div>
      <Topfooter />
      <Footer />
    </>
  );
};

export default Details;