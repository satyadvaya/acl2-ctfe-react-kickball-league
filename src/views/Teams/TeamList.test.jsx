import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import TeamList from './TeamList';

const mockTeam1 = {
  id: 1,
  created_at: '2021-12-10T15:55:13.832603+00:00',
  name: 'Mocked Team 1',
  city: 'Mocked City 1',
  state: 'Mocked State 1',
  players: [],
};

const mockTeam2 = {
  id: 2,
  created_at: '2021-12-10T15:55:13.832603+00:00',
  name: 'Mocked Team 2',
  city: 'Mocked City 2',
  state: 'Mocked State 2',
  players: [],
};

const server = setupServer(
  rest.get('https://bvhupaxphhocdhgmoohf.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json([mockTeam1, mockTeam2]));
  }),
  rest.delete('https://bvhupaxphhocdhgmoohf.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json(mockTeam2));
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('should render the team list', async () => {
  const { container } = render(
    <MemoryRouter>
      <TeamList />
    </MemoryRouter>
  );

  await screen.findByText(/Mocked Team 1/i);

  expect(container).toMatchSnapshot();
});

it('should delete a team', async () => {
  window.confirm = jest.fn(() => true);
  render(
    <MemoryRouter>
      <TeamList />
    </MemoryRouter>
  );

  await screen.findByText(/Mocked Team 2/i);

  const deleteButton = screen.getByRole('button', { name: 'Delete Mocked Team 2' });

  act(() => {
    userEvent.click(deleteButton);
    expect(window.confirm).toBeCalled();
  });

  await screen.findByText('Loading teams...');
  await screen.findByText(/Mocked Team 1/i);
});
