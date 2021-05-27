import React from "react";
import { useHistory, useParams } from 'react-router-dom';

import HeaderThin from "./HeaderThin";
import Topfooter from "./Topfooter";
import Footer from "./Footer";
import Condition from "./Condition";
import ChoosenGames from "./ChoosenGames";
import ImageGallery from "./ImageGallery";
import StarRating from "./StarRating"

const AddReview = ({ addData, user }) => {

  let history = useHistory();

  return (
      <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <ImageGallery add={addData}/>
            </div>
            <div className="col-sm-7">
              <div className="row userInfoBar">
                <div className="col-sm-1">
                  <img className="userProfileImg" src={user.img} alt={user.userName} />
                </div>
                <div className="col-sm-6 userInfo">
                  <p className="userName">{user.userName}<br />
                    <p className="tagg omdome">Omdöme<br /><StarRating rep={user.rep}/></p>
                  </p>
                </div>
                <div className=" col-sm-5">
                  <div className="detailLocation">{addData.gameTitle} • {user.location}</div>
                </div>
              </div>
              <div className="row descriptionBox" id="reviewDescription">
                <div className="col-sm-6">
                  <p className="bold">{addData.addTitle}</p>
                  <p>{addData.addDescription}</p>
                  <p className="bold">Skickbeskrivning</p>
                  <p>{addData.conditionDescription}</p>
                </div>
                <div className="col-sm-5 offset-sm-1">
                  <br/>
                  <p><Condition condition={addData.condition} missingParts={addData.missingParts}/></p>
                  <p className="tagg-bold five-margin-bottom">Frakt</p>
                  <p className="tagg">{addData.shipping}</p>
                  <p className="bold five-margin-bottom">Vill byta mot</p>
                  <p className="vbm-tag">{addData.tradeFor}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
};

export default AddReview;