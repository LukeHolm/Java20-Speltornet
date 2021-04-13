import './App.css';

function App() {
  return (
    <div className="Ap">
      <header className="App-heade">
        <div class="top-bar"></div>
        <div class="top-bar-overlap"></div>
      </header>
      <body>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img class="bild" src="https://anima-uploads.s3.amazonaws.com/projects/6074664a17d10c4e519008cf/releases/60746a0533c6fe6654c155b4/img/ska-rmavbild-2021-03-22-kl--15-31-6@2x.png" alt="bild" />
              <p class="spelnamn">Pandemic</p>
              <button class="knapp" id="knapp1" />
            </div>
            <div class="col-sm">
              One of three columns
            </div>
            <div class="col-sm">
              One of three columns
            </div>
            <div class="col-sm">
              One of three columns
            </div>
          </div>
        </div>
      </body>
      <footer className="App-footer">
        <div class="row align-items-center">
          <div class="col">
            One of three columns
    </div>
          <div class="col">
            One of three columns
    </div>
          <div class="col">
            One of three columns
    </div>
        </div>
      </footer>
    </div>
  );
}

export default App;