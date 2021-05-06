import React, { useState } from "react";

const FormTest = () => {

    
  const submitForm = (event) => {
    // Hindrar formuläret från att ladda om sidan.
    event.preventDefault();
    postData();
    alert("Rubrik: " + headline);
    console.log(greeting);
  };

  return {};
};
export default FormTest;
