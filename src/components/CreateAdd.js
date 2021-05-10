import React from "react";
import Form from "./Form";
import HeaderThin from "./HeaderThin";
import Topfooter from "./Topfooter";
import Footer from "./Footer";

const CreateAdd = () => {
  return (
    <>
      <HeaderThin />
      <div className="Row">
        <div className="col-sm-8 offset-sm-2">
          <Form />
        </div>
      </div>

      <Topfooter />
      <Footer />
    </>
  );
};

export default CreateAdd;
