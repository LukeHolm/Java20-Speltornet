import "./App.css";
import Landingpage from "./components/Landingpage";
import Details from "./components/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAdd from "./components/CreateAdd";
import GameAdds from "./components/GameAdds";
import LoadData from "./components/LoadData";
import Footer from './components/Footer'
import {useEffect, useState} from 'react'

function App() {

  const [gamecard, setGamecard] = useState([]);
  const [gameAdd, setGameAdd] = useState([]);

  useEffect(() => {
      fetch('https://609a4cbe0f5a13001721a8af.mockapi.io/gamecatalog').then(response => response.json()).then(data => setGamecard(data))
      fetch('https://609a4cbe0f5a13001721a8af.mockapi.io/gamesavailable').then(response => response.json()).then(data => setGameAdd(data))
  }, [])


  return ( 
      <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage}>
            <Landingpage gamecard={gamecard}/>
          </Route>
          <Route path="/CreateAdd" component={CreateAdd} />
          <Route exact path="/GameAdds/:gameId" component={GameAdds}>
            <GameAdds gamecard={gamecard} gameAdd={gameAdd}/>
          </Route>
          <Route path="GameAdds/:gameId/:addId" component={Details} />
          <Route exact path="/LoadData" component={LoadData} />
        </Switch>
      </Router>
      <Footer />
      </>
  );
}

export default App;
