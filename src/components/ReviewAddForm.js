

const ReviewAddForm = ({formData}) => {


  const URL = "https://609a4cbe0f5a13001721a8af.mockapi.io/ContactForm";

    console.log(formData)

  const submitForm = (event) => {
      event.preventDefault()

      const requestBody = {
        chooseGame: formData.chooseGame,
        headline: formData.headline,
        salesPitch: formData.salesPitch,
        gameCondition: formData.condition,
        missingParts: formData.partsMissing,
        partsComment: formData.partsText,
        image: [],
        delivery: formData.delivery,
        gamesWanted: formData.gamesWanted,
      };
  
         fetch(URL, {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
          body: JSON.stringify({ requestBody }),
         }).then((responseFromAPI) => {
           if (responseFromAPI.status === 404) {
             alert("Det gick fel, sidan finns inte");
           } else {
             alert("Bytesförfrågan skickad!");
            //  setHeadline("");
            //  setSalesPitch("");
            //  setCondtion("");
            //  setPartsMissing("");
            //  setPartsText("");
           }
           console.log("HEHEHEEHEHEH", responseFromAPI.status);
           console.log(requestBody);
         });
  }

    return (
        <>
          <form onSubmit={(event) => submitForm()}>

          </form>
        </>
    )
}

export default ReviewAddForm