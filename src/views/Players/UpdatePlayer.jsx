import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PlayerForm from '../../components/Players/PlayerForm';
import { getPlayerById, updatePlayerById } from '../../services/players';

export default function UpdatePlayer() {
  const { playerId } = useParams();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function getPlayer() {
      const { name, position, teamId } = await getPlayerById(playerId);
      setName(name);
      setPosition(position);
      setTeamId(teamId);
    }
    getPlayer();
  }, [playerId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await updatePlayerById(playerId, { name, position, teamId });

    history.push(`/players/${response[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Update Player</legend>
        <PlayerForm
          name={name}
          setName={setName}
          position={position}
          setPosition={setPosition}
          teamId={teamId}
          setTeamId={setTeamId}
          handleSubmit={handleSubmit}
        />
      </fieldset>
    </>
  );
}
