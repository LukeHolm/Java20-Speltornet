/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useEffect, useState} from 'react'

import "./App.css";

import Landingpage from "./components/Landingpage";
import Details from "./components/Details";
import CreateAdd from "./components/CreateAdd";
import GameAdds from "./components/GameAdds";
import LoadData from "./components/LoadData";
import Footer from './components/Footer'
import AddForm from "./components/AddForm";


function App() {

  const [gamecard, setGamecard] = useState([]);
  const [gameAdd, setGameAdd] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch('https://609a4cbe0f5a13001721a8af.mockapi.io/gamecatalog').then(response => response.json()).then(data => setGamecard(data))
      fetch('https://609a4cbe0f5a13001721a8af.mockapi.io/gamesavailable').then(response => response.json()).then(data => setGameAdd(data))
      fetch('https://609a4cbe0f5a13001721a8af.mockapi.io/users').then(response => response.json()).then(data => setUsers(data))
  }, [])


  return ( 
      <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage}>
            <Landingpage gamecard={gamecard}/>
          </Route>
          <Route path="/CreateAdd" component={CreateAdd}>
            <CreateAdd gamecard={gamecard}/>            
            </Route> 
          <Route exact path="/GameAdds/:gameId" component={GameAdds}>
            <GameAdds gamecard={gamecard} gameAdd={gameAdd}/>
          </Route>
          <Route path="/Details/:addId" component={Details}>
            <Details gameAdd={gameAdd} users={users}/>
          </Route>
          <Route exact path="/LoadData" component={LoadData} />
          <Route path="/ChoosenGames" component={AddForm}>
            <AddForm />
          </Route>
        </Switch>
      </Router>
      <Footer />
      </>
  );
}

export default App;
