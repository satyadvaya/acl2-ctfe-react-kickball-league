import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import TeamForm from '../../components/Teams/TeamForm';
import { getTeamById, updateTeamById } from '../../services/teams';

export default function UpdateTeam() {
  const { teamId } = useParams();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function getTeam() {
      const { name, city, state } = await getTeamById(teamId);
      setName(name);
      setCity(city);
      setState(state);
    }
    getTeam();
  }, [teamId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await updateTeamById(teamId, { name, city, state });

    history.push(`/teams/${response[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Update Team</legend>
        <TeamForm
          name={name}
          setName={setName}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          handleSubmit={handleSubmit}
        />
      </fieldset>
    </>
  );
}
