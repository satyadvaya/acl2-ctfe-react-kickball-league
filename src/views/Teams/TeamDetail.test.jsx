import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import TeamDetail from "./TeamDetail";

it("should render a detailed view of an individual team", async () => {
  render(
    <MemoryRouter initialEntries={["/teams/4"]}>
      <Route path="/teams/:teamId" component={TeamDetail} />
    </MemoryRouter>
  );

  screen.getByText("Loading team...");
  const teamName = await screen.findByText("SoggyHat Tuques", {
    exact: false,
  });
  expect(teamName).toBeInTheDocument();
});
