import React from "react";
import HeaderThin from "./HeaderThin";
import Topfooter from "./Topfooter";
import Footer from "./Footer";
import AddForm from "./AddForm";
import Dropdown from "./Dropdown";

const CreateAdd = ({gamecard}) => {
  return (
    <>
      <HeaderThin />
      <div className="Row">
        <div className="col-sm-8 offset-sm-2">
          <AddForm gamecard={gamecard}/>
          {/* <Dropdown gamecard={gamecard}/> */}
        </div>
      </div>
    </>
  );
};

export default CreateAdd;
