import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Switch } from 'react-router-dom';
import TeamDetail from './TeamDetail';

const mockTeam1 = {
  id: 1,
  created_at: '2021-12-10T15:55:13.832603+00:00',
  name: 'Mocked Team 1',
  city: 'Mocked City 1',
  state: 'Mocked State 1',
  players: [],
};

const server = setupServer(
  rest.get('https://bvhupaxphhocdhgmoohf.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json(mockTeam1));
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('should render a detailed view of an individual team', async () => {
  render(
    <MemoryRouter>
      <Switch>
        <TeamDetail label="label prop value" match={{ params: { teamId: '1' } }} />
      </Switch>
    </MemoryRouter>
  );

  screen.getByText('Loading team...');

  const teamName = await screen.findByText('Mocked Team 1', {
    exact: false,
  });
  const customLabel = screen.getByText('label prop value');

  expect(teamName).toBeInTheDocument();
  expect(customLabel).toBeInTheDocument();
});
