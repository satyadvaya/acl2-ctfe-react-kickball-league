import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import TeamDetail from "./views/Teams/TeamDetail";
import TeamList from "./views/Teams/TeamList";

function App() {
  return (
    <div className="App">
      <Router>
        <header>header</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamList} />
          <Route exact path="/teams/:id" component={TeamDetail} />
        </Switch>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
