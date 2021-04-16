import React from "react";

function Catan() {
    // Get the modals
    var modal = document.getElementsByClassName('modal');

    // Get the button that opens the modal
    var btn = document.getElementsByClassName("button");

    // Get the <span> elements that closes the modal
    var span = document.getElementsByClassName("close");

    //Cycle through the length of the buttons, then open the one modal corresponding to that which was clicked.
    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            modal[i].style.display = "block";
        }
    }

    //When the user clicks on the (x) the modal closes.
    for (let i = 0; i < span.length; i++) {
        span[i].onclick = function () {
            modal[i].style.display = "none";
        }
    }

    // When user clicks anywhere outside of the modal, close it.
    for (let i = 0; i < modal.length; i++) {
        window.addEventListener("click", function (event) {
            if (event.target === modal[i]) {
                modal[i].style.display = "none";
            }
        });
    }
    return (
        <div>
            <button id="catanbtn" className="button">Se spel</button>
            <div id="catan" className="modal">
                <div className="modal-content">
                    <span class="close">&times;</span>

                    <h1 className="gametitle">
                        Catan
                  </h1>

                    <div className="row modalrow">

                        <div className="col-sm-3">
                            <img src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-28-5@2x.png" alt="bild" className="cover" />
                        </div>

                        <div className=" col-sm-4 offset-sm-1">
                            <h5 className="bold">
                                Skick
                      </h5>
                            <h6 className="bold">
                                Nyskick <br />
                        Inga delar saknas
                      </h6>
                            <p>
                                Spelet är spelat en gång. Alla delar finns kvar.
                      </p>
                        </div>

                        <div className="col-sm-4">
                            <h5 className="bold">
                                Kontakta bytaren
                      </h5>

                            <div className="row seller">
                                <div className="col-sm-3">
                                    <img src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-28-5@2x.png" alt="bild" class="userpic" />
                                </div>
                                <div className="col-sm-9">
                                    <p className="sellerinfo">
                                        <b><br/>Alexerius</b>
                          +467014142390 <br />
                          alexerius@gmail.com
                          </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row modalrow">
                        <h4 className="bold">
                            Beskrivning av Catan
                    </h4>
                        <p>
                            Catan är en ö som spelarna ska kolonisera byar, städer och vägar, och på så vis erhålla poäng. Den som först får 10 poäng vinner spelet. Spelplanen är uppbyggd av ett antal hexagonformade brickor vars position kan variera från spel till spel.
                    </p>
                    </div>

                    <h3 className="bold howto">
                        Hur funkar det?
                  </h3>
                    <div className="row modalrow">
                        <div className="col-sm-2 offset-sm-2">
                            <h3 className="bold howto">1</h3>
                            <p className="howto">
                                Wave your hands
                      </p>
                        </div>

                        <div className="col-sm-2 offset-sm-1">
                            <h3 className="bold howto">
                                2
                      </h3>
                            <p className="howto">
                                Say "Alakazam!"
                      </p>
                        </div>

                        <div className="col-sm-2 offset-sm-1">
                            <h3 className="bold howto">
                                3
                      </h3>
                            <p className="howto">
                                *Magic happens*
                      </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Catan