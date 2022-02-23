import React from 'react';

export default function TeamForm({ name, setName, city, setCity, state, setState, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        // Below same as: onChange={(event) => setName(event.target.value)}
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
      <button type="submit" aria-label="submit form">
        Submit
      </button>
    </form>
  );
}
