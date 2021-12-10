import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTeams } from "../../services/teams";

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  return (
    <>
      <h1>Teams:</h1>
      <Link to="/teams/new" className="App-link">
        Add a team
      </Link>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`/teams/${team.id}`} className="App-link">
                {team.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamList;
