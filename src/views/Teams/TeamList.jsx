import { Link } from "react-router-dom";

function TeamList() {
  return (
    <>
      <h1>Teams:</h1>
      <ul>
        <li>
          <Link to="/teams/1" className="App-link">
            Team 1
          </Link>
        </li>
        <li>
          <Link to="/teams/2" className="App-link">
            Team 2
          </Link>
        </li>
        <li>
          <Link to="/teams/3" className="App-link">
            Team 3
          </Link>
        </li>
      </ul>
    </>
  );
}

export default TeamList;
