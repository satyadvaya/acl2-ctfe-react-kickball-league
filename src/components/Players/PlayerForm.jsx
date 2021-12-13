import React from 'react';

export default function PlayerForm({
  name,
  setName,
  position,
  setPosition,
  teamId,
  setTeamId,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <label htmlFor="position">Position:</label>
      <input
        id="position"
        name="position"
        type="text"
        value={position}
        onChange={({ target }) => setPosition(target.value)}
      />

      <label htmlFor="teamId">TeamId:</label>
      <input
        id="teamId"
        name="teamId"
        type="number"
        value={teamId}
        onChange={({ target }) => setTeamId(target.value)}
      />

      <button type="submit" aria-label="submit form">
        Submit
      </button>
    </form>
  );
}
