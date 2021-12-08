import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlayerById } from "../../services/players";

function PlayerDetail() {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayerById(playerId)
      .then((resp) => setPlayer(resp))
      .finally(() => setLoading(false));
  }, [playerId]);

  if (loading) return <h1>Loading player...</h1>;

  return (
    <>
      <p>
        <Link to="/players" className="App-link">
          Back to Players
        </Link>
      </p>
      <h1>{player.name}</h1>
      <p>
        From {player.teams.city}, {player.teams.state}
      </p>
    </>
  );
}

export default PlayerDetail;
