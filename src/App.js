import './App.css';
import Burger from './components/Burger';
import Catan from './components/Catan';
import Pandemic from './components/Pandemic';
import GamePopup from './components/GamePopup';
import {React, useState} from 'react';
import ModalButton from './components/ModalButton';


function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <div className="cont">
          <div className="row no-gutter">
            <div className="col top-bar">
              <div className="col-sm-1 offset-sm-0 speltornet-logga">
                <img class="tornlogga" src="Speltornet_Logga.svg" alt="alt">
                </img>
              </div>
              <div className="speltornet">
                Speltornet
              </div>
            </div>
            <div className="col-sm-4 offset-sm-0">
              <span className="top-bar-overlap">
                <h1 className="motto">
                  Byt, spela, byt!
                </h1>
                <h2 className="motto-text">Spel ska <mark className="pink">spelas</mark>,<br/> inte stå och damma!</h2>
                <h3 className="motto-text-forts"> Speltornet låter dig <mark className="pink">snabbt</mark> och <br/> <mark className="pink">enkelt</mark> byta begagnade brädspel.</h3>
                <br/><br/>
                <button className="knappannons">Skapa annons <mark className="plus"> + </mark></button>
              </span>
            </div>
          </div>
        </div>
      </header>
      <body>
        <Burger />
        <div className="container">
          <h1 className="speltorget">Speltorget</h1>
          <div className="row">
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="Pandemic" />
              <p className="spelnamn">Pandemic</p>
              <ModalButton />
            </div>
            <div className="col">
              <img className="bild" src="https://s3-alpha-sig.figma.com/img/7f70/2364/4fb5e9ecdf3348ed10de4ce06dbdbad7?Expires=1619395200&Signature=Zo06Cd1pP9gE0unuq3niiauK5~wLux8DO12mLmKHaq9z6APPyuD-tXLQVVD4zbOkJ0VGfIu2y8wXoe5i5q8g0lZ3ttc8Ck~L1YCV8GDaH2ACYFseX9xaxmEJDwxXBK6N9fa~OBBMuagC9HQcrD5QSm-eZ14MPyzIflPzwtHv9dniAYPVqi~1qiaJKMUwMmPmC7K8KDwGwF8A~yiGWnkFlJ57aPqtGFxfde1cZLIBP2ofDEf7XF2ATHn4iKa6Dwt4SPmlYI92eecwOw~5tDKTT5ynFYiyIC~I2v5xJ4IlvIBEg9OawpJaj3tLkp-RL9UJWR6PzzAPsNLY5WKbz0t-bg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Small world" />
              <p className="spelnamn">Small world</p>
              <button className="knapp" onClick={() => setShow(true)}>Open</button>
              <GamePopup title="Catan" onClose={() => setShow(false)} show={show}>
                <p>Body body!</p>
              </GamePopup>

            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-19-3@2x.png" alt="bild" />
              <p className="spelnamn">Labyrint</p>
              <button className="knapp" id="knapp3">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-28-5@2x.png" alt="bild" />
              <p className="spelnamn">Catan</p>              
              <Catan />              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-19@2x.png" alt="bild" />
              <p className="spelnamn">Civilization</p>
              <button className="knapp" id="knapp5">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-19-2@2x.png" alt="bild" />
              <p className="spelnamn">Minecraft</p>
              <button className="knapp" id="knapp6">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-30-3@2x.png" alt="bild" />
              <p className="spelnamn">Ticket to ride</p>
              <button className="knapp" id="knapp7">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-18@2x.png" alt="bild" />
              <p className="spelnamn">Maracaibo</p>
              <button className="knapp" id="knapp8">Se spel</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-18-1@2x.png" alt="bild" />
              <p className="spelnamn">Diamanten</p>
              <button className="knapp" id="knapp9">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-18-2@2x.png" alt="bild" />
              <p className="spelnamn">Othello</p>
              <button className="knapp" id="knapp10">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp11">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-18-3@2x.png" alt="bild" />
              <p className="spelnamn">Nova luna</p>
              <button className="knapp" id="knapp12">Se spel</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-19-1@2x.png" alt="bild" />
              <p className="spelnamn">Game of thrones</p>
              <button className="knapp" id="knapp13">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-32-3@2x.png" alt="bild" />
              <p className="spelnamn">Monopol</p>
              <button className="knapp" id="knapp14">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp15">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp16">Se spel</button>
            </div>
          </div>
        </div>
        <div className="body-bottom">
          <h1 className="body-bottom-header">Hur funkar det?</h1>
          <div class="container">
            <div class="row">
              <div class="col">
                <img className="dice" id="dice-one" src="D6r1.svg" alt="Tärning 1"></img>
                <h2 className="body-bottom-text">Välj ut ett spel från sidan du är intresserad av.</h2>
              </div>
              <div class="col">
                <img className="dice" id="dice-two" src="D6r2.svg" alt="Tärning 2"></img>
                <h2 className="body-bottom-text">Läs detaljinformationen om spelet och spelets skick. Kontakta därefter bytaren.</h2>
              </div>
              <div class="col">
                <img className="dice" id="dice-three" src="D6r3.svg" alt="Tärning 3"></img>
                <h2 className="body-bottom-text">Kom överens om byte och bestäm leverans, alternativt om ni möts upp för att byta spelen.</h2>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer className="App-footer">
        <div className="row align-items-center">
          <div className="col">
            <h3>Kontakt</h3>
          </div>
          <div className="col">
            <h3>Användarvillkor</h3>
          </div>
          <div className="col">
            <h3>Företagsinfo</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;