import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import PlayerDetail from "./PlayerDetail";

it("should render player detail for Jayne Phonda", async () => {
  render(
    <MemoryRouter initialEntries={["/players/10"]}>
      <Route path="/players/:playerId" component={PlayerDetail} />
    </MemoryRouter>
  );

  screen.getByText("Loading player...");
  const teamName = await screen.findByText("Jayne Phonda", { exact: false });
  expect(teamName).toBeInTheDocument();
});
