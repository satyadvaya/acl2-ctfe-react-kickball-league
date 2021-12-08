import "./App.css";
import Home from "./views/Home/Home";
import TeamDetail from "./views/Teams/TeamDetail";
import TeamList from "./views/Teams/TeamList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <TeamList />
        <TeamDetail />
      </header>
    </div>
  );
}

export default App;
