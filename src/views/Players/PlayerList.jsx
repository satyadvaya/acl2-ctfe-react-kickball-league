import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlayers } from "../../services/players";

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  return (
    <>
      <h1>Players:</h1>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`/players/${player.id}`} className="App-link">
                {player.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// blah

export default PlayerList;
