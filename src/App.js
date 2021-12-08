import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
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
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamList} />
          <Route exact path="/teams/:teamId" component={TeamDetail} />
        </Switch>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
