import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import PlayerList from "./PlayerList";

it("should render the player list", async () => {
  render(
    <MemoryRouter initialEntries={["/players/"]}>
      <Route path="/players" component={PlayerList} />
    </MemoryRouter>
  );

  const playerName = await screen.findByText("Jayne Phonda", { exact: false });
  expect(playerName).toBeInTheDocument();
});
