import React from "react";
import HeaderThin from "./HeaderThin";
import Topfooter from "./Topfooter";
import Footer from "./Footer";
import AddForm from "./AddForm";

const CreateAdd = () => {
  return (
    <>
      <HeaderThin />
      <div className="Row">
        <div className="col-sm-7 offset-sm-3">
          <AddForm />
        </div>
      </div>

      <Topfooter />
      <Footer />
    </>
  );
};

export default CreateAdd;
