import { useState } from "react";
import { useHistory } from "react-router";
import TeamForm from "../../components/Teams/TeamForm";
import { createTeam } from "../../services/teams";

export default function AddTeam() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Below same as:
    // const teamObject = { name: name, city: citsy, state: state };
    // await createTeam(teamObject);
    const response = await createTeam({ name, city, state });
    history.push(`/teams/${response[0].id}`);
    // Above same as:
    // createTeam({ name, city, state }).then((response) => {
    //   history.push(`/teams/${response[0].id}`);
    // });
  };

  return (
    <>
      <fieldset>
        <legend>Add a Team</legend>
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
