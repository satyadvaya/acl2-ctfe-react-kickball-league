import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import TeamList from './views/Teams/TeamList';
import TeamDetail from './views/Teams/TeamDetail';
import AddTeam from './views/Teams/AddTeam';
import UpdateTeam from './views/Teams/UpdateTeam';
import PlayerList from './views/Players/PlayerList';
import PlayerDetail from './views/Players/PlayerDetail';
import AddPlayer from './views/Players/AddPlayer';
import UpdatePlayer from './views/Players/UpdatePlayer';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          Kickball!{'  '}
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>
          {'  '}
          <NavLink to="/teams" className="App-link" exact>
            Teams
          </NavLink>
          {'  '}
          <NavLink to="/players" className="App-link" exact>
            Players
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/teams/update/:teamId" component={UpdateTeam} />
          <Route exact path="/teams/new" component={AddTeam} />
          <Route exact path="/teams/:teamId" component={TeamDetail} />
          <Route exact path="/teams" component={TeamList} />
          <Route exact path="/players/update/:playerId" component={UpdatePlayer} />
          <Route exact path="/players/new" component={AddPlayer} />
          <Route exact path="/players/:playerId" component={PlayerDetail} />
          <Route exact path="/players" component={PlayerList} />
          <Route exact path="/" component={Home} />
        </Switch>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
