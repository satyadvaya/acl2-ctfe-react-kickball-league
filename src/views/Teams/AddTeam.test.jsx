import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import AddTeam from "./AddTeam";
import TeamDetail from "./TeamDetail";

const mockTeam = {
  id: 4,
  created_at: "2021-12-10T15:55:13.832603+00:00",
  name: "SoggyHat Tuques",
  city: "WetHead",
  state: "Oregon",
  players: [],
};

const server = setupServer(
  // Describe the requests to mock
  rest.get(
    "https://bvhupaxphhocdhgmoohf.supabase.co/rest/v1/teams",
    (req, res, ctx) => {
      return res(ctx.json(mockTeam));
    }
  ),
  rest.post(
    "https://bvhupaxphhocdhgmoohf.supabase.co/rest/v1/teams",
    (req, res, ctx) => {
      return res(ctx.json([mockTeam]));
    }
  )
);

beforeAll(() => {
  // Establish requests interception layer before all tests
  server.listen();
});

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests
  server.close();
});

it("should add a team and redirect to the team detail page", async () => {
  const history = createMemoryHistory();
  history.push("/teams/new");

  render(
    <Router history={history}>
      <Route path="/teams/new">
        <AddTeam />
      </Route>
      <Route path="/teams/:id" component={TeamDetail} />
    </Router>
  );

  screen.getByText("Add a Team");

  const nameField = screen.getByLabelText(/name/i);
  const cityField = screen.getByLabelText(/city/i);
  const stateField = screen.getByLabelText(/state/i);
  const submitButton = screen.getByRole("button", { name: "add a team" });

  userEvent.type(nameField, "Mocked Team");
  userEvent.type(cityField, "Mocked City");
  userEvent.type(stateField, "Mocked State");
  userEvent.click(submitButton);

  await screen.findByText("SoggyHat Tuques");
});
