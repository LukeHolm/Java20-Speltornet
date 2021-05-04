import './App.css';
import Landingpage from './components/Landingpage';
import Details from './components/Details'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAdd from './components/CreateAdd'
import data from "./data.json";


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/CreateAdd" component={CreateAdd} />
          <Route path="/detail" component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;