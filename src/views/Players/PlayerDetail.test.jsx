import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import PlayerDetail from "./PlayerDetail";

it("should render a detailed view of an individual player", async () => {
  render(
    <MemoryRouter initialEntries={["/players/1"]}>
      <Route path="/players/:playerId" component={PlayerDetail} />
    </MemoryRouter>
  );

  screen.getByText("Loading player...");
  const teamName = await screen.findByText("DB Cooper", { exact: false });
  expect(teamName).toBeInTheDocument();
});
