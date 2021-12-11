import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getTeams } from "../../services/teams";

function TeamList() {
  const [teams, setTeams] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  const handleClick = (id) => {
    history.push(`/teams/update/${id}`);
  };

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
              {"  "}
              <button onClick={() => handleClick(team.id)}>Update</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamList;
