import { useState } from 'react';
import { useHistory } from 'react-router';
import PlayerForm from '../../components/Players/PlayerForm';
import { createPlayer } from '../../services/players';

export default function AddPlayer() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await createPlayer({ name, position, teamId });
    history.push(`/players/${response[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Add a Player</legend>
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
