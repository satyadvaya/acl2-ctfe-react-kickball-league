import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTeamById } from '../../services/teams';

function TeamDetail() {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Below same as:
    // getTeamById(teamId)
    //   .then((resp) => setTeam(resp))
    //   .finally(() => setLoading(false));
    async function getTeam() {
      const response = await getTeamById(teamId);
      setTeam(response);
      setLoading(false);
    }

    getTeam();
  }, [teamId]);

  if (loading) return <h1>Loading team...</h1>;

  return (
    <>
      <p>
        <Link to="/teams" className="App-link">
          Back to Teams
        </Link>
      </p>
      <h1>{team.name}</h1>
      <p>
        From {team.city}, {team.state}
      </p>
      <ul>
        {team.players.map((player) => {
          return (
            <li key={player.id}>
              {player.position} - {player.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamDetail;
