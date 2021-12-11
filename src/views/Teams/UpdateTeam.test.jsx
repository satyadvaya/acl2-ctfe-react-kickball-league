import { rest } from "msw";
import { setupServer } from "msw/node";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import TeamDetail from "./TeamDetail";
import { Route, Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import UpdateTeam from "./UpdateTeam";

const mockTeam = {
  id: 99,
  created_at: "2021-12-10T15:55:13.832603+00:00",
  name: "Mocked Team",
  city: "Mocked City",
  state: "Mocked State",
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
  server.listen();
});

afterAll(() => {
  server.close();
});

it("should update a team and redirect to the team detail page", async () => {
  const history = createMemoryHistory();
  history.push("/teams/update/:id");

  render(
    <Router history={history}>
      <Route path="/teams/update/:id">
        <UpdateTeam />
      </Route>
      <Route path="/teams/update/:id" component={TeamDetail} />
    </Router>
  );

  screen.getByText("Update Team");

  const nameField = screen.getByLabelText(/name/i);
  const cityField = screen.getByLabelText(/city/i);
  const stateField = screen.getByLabelText(/state/i);
  const submitButton = screen.getByRole("button", { name: "submit form" });

  userEvent.type(nameField, "booger");
  userEvent.type(cityField, "booger");
  userEvent.type(stateField, "booger");
  userEvent.click(submitButton);

  await screen.findByText("Mocked Team");
});
