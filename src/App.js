import './App.css';
import Burger from './components/Burger';
import Lines from './components/Lines';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <div class="speltornet">Speltornet</div>
        </div>
        <div className="top-bar-overlap">
          <h1 className="moto">Byt, spela, byt!</h1>
          <Lines />
        </div>
      </header>
      <body>
        <Burger />
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-5@2x.png" alt="bild" />
              <p className="spelnamn">Smallworld</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-19-3@2x.png" alt="bild" />
              <p className="spelnamn">Labyrint</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-28-5@2x.png" alt="bild" />
              <p className="spelnamn">Catan</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-19@2x.png" alt="bild" />
              <p className="spelnamn">Civilization</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-19-2@2x.png" alt="bild" />
              <p className="spelnamn">Minecraft</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-30-3@2x.png" alt="bild" />
              <p className="spelnamn">Ticket to ride</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-18@2x.png" alt="bild" />
              <p className="spelnamn">Maracaibo</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-18-1@2x.png" alt="bild" />
              <p className="spelnamn">Diamanten</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-18-2@2x.png" alt="bild" />
              <p className="spelnamn">Othello</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-18-3@2x.png" alt="bild" />
              <p className="spelnamn">Nova luna</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-04-08-kl--14-19-1@2x.png" alt="bild" />
              <p className="spelnamn">Game of thrones</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-32-3@2x.png" alt="bild" />
              <p className="spelnamn">Monopol</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
            <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
            <div className="col">
              <img className="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p className="spelnamn">Pandemic</p>
              <button className="knapp" id="knapp1">Se spel</button>
            </div>
          </div>
        </div>
        <div className="body-bottom">
          <h4 className="explanation">Hur funkar det?</h4>
          <div class="container">
            <div class="row">
              <div class="col">
                1
              </div>
              <div class="col">
                2
              </div>
              <div class="col">
                3
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer className="App-footer">
        <div className="row align-items-center">
          <div className="col">
            One of three columns
    </div>
          <div className="col">
            One of three columns
    </div>
          <div className="col">
            One of three columns
    </div>
        </div>
      </footer>
    </div>
  );
}

export default App;