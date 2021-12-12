import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { deleteTeamById, getTeams } from "../../services/teams";

function TeamList() {
  const [teams, setTeams] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const loadTeams = async () => {
    const response = await getTeams();
    setTeams(response);
    setLoading(false);
  };

  useEffect(() => {
    loadTeams();
  }, []);

  const handleUpdate = (id) => {
    history.push(`/teams/update/${id}`);
  };

  const handleDelete = async ({ id, name }) => {
    const confirmDelete = confirm(
      `Are you sure you want to delete the ${name} team?`
    );

    if (confirmDelete) {
      await deleteTeamById(id);
      await loadTeams();
    }
  };

  if (loading) return <p>Loading teams...</p>;

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
              <button type="button" onClick={() => handleUpdate(team.id)}>
                Update
              </button>
              <button
                type="button"
                onClick={() => handleDelete({ id: team.id, name: team.name })}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamList;
