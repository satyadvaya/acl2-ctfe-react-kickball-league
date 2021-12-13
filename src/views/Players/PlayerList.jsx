import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { deletePlayerById, getPlayers } from '../../services/players';

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const loadPlayers = async () => {
    setLoading(true);
    const response = await getPlayers();
    setPlayers(response);
    setLoading(false);
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleUpdate = (id) => {
    history.push(`/players/update/${id}`);
  };

  const handleDelete = async ({ id, name }) => {
    const confirmDelete = confirm(`Are you sure you want to delete player ${name}?`);

    if (confirmDelete) {
      await deletePlayerById(id);
      await loadPlayers();
    }
  };

  if (loading) return <p>Loading players...</p>;

  return (
    <>
      <h1>Players:</h1>
      <Link to="/players/new" className="App-link">
        Add a Player
      </Link>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`/players/${player.id}`} className="App-link">
                {player.name}
              </Link>
              {'  '}
              <button type="button" onClick={() => handleUpdate(player.id)}>
                Update
              </button>
              {'  '}
              <button
                type="button"
                aria-label={`Delete ${player.name}`}
                onClick={() => handleDelete({ id: player.id, name: player.name })}
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

export default PlayerList;
