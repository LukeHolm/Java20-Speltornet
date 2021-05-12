import "./App.css";
import Landingpage from "./components/Landingpage";
import Details from "./components/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAdd from "./components/CreateAdd";
import GameAdds from "./components/GameAdds";
import LoadData from "./components/LoadData";
import Topfooter from "./components/Topfooter";
import Footer from './components/Footer'
import {useEffect, useState} from 'react'

function App() {

  const [gamecard, setGamecard] = useState([]);

  useEffect(() => {
      fetch('https://609a4cbe0f5a13001721a8af.mockapi.io/gamecatalog').then(response => response.json()).then(data => setGamecard(data))
  }, [])


  return (
    <div className="App">
      {gamecard.map(game => (  
      <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage} title= {game.title} img= {game.imageURL} id= {game.id}/>
          <Route path="/CreateAdd" component={CreateAdd} />
          <Route exact path="/GameAdds/:gameId" component={GameAdds} />
          <Route path="GameAdds/:gameId/:addId" component={Details} />
          <Route exact path="/LoadData" component={LoadData} />
        </Switch>
      </Router>
      <Footer />
      </>
      ))}
    </div>
  );
}

export default App;
