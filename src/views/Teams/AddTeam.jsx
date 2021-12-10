import { useState } from "react";
import { useHistory } from "react-router";
import { createTeam } from "../../services/teams";

export default function AddTeam() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Below same as:
    // const teamObj = { name: name, city: city, state: state };
    // await createTeam(teamObj);
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            // Below same as: onChange={(event) => setName(target.value)}
            onChange={({ target }) => setName(target.value)}
          />

          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />

          <label htmlFor="state">State:</label>
          <input
            id="state"
            name="state"
            type="text"
            value={state}
            onChange={({ target }) => setState(target.value)}
          />

          {/* Below same as: <input type="text" value="Add a Team" /> */}
          <button type="submit">Add a Team</button>
        </form>
      </fieldset>
    </>
  );
}
