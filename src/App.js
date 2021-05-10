import "./App.css";
import Landingpage from "./components/Landingpage";
import Details from "./components/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAdd from "./components/CreateAdd";
import GameAdds from "./components/GameAdds";
import LoadData from "./components/LoadData";
import Topfooter from "./components/Topfooter";
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/CreateAdd" component={CreateAdd} />
          <Route exact path="/GameAdds/:gameId" component={GameAdds} />
          <Route path="GameAdds/:gameId/:addId" component={Details} />
          <Route exact path="/LoadData" component={LoadData} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
