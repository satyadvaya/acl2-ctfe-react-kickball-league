import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import PlayerDetail from "./views/Players/PlayerDetail";
import PlayerList from "./views/Players/PlayerList";
import AddTeam from "./views/Teams/AddTeam";
import TeamDetail from "./views/Teams/TeamDetail";
import TeamList from "./views/Teams/TeamList";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          Kickball!{"  "}
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>
          {"  "}
          <NavLink to="/teams" className="App-link" exact>
            Teams
          </NavLink>
          {"  "}
          <NavLink to="/players" className="App-link" exact>
            Players
          </NavLink>
        </header>
        <Switch>
          <Route path="/teams/new" component={AddTeam} />
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamList} />
          <Route exact path="/teams/:teamId" component={TeamDetail} />
          <Route exact path="/players" component={PlayerList} />
          <Route exact path="/players/:playerId" component={PlayerDetail} />
        </Switch>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
