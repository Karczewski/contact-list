import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import * as apiData from '../../api';
import mockData from '../../mockData.json';

let cursor = -1;
const size = 10;

async function mockApi() {
  cursor += 1;
  const start = cursor * size;
  const end = cursor * size + size;
  return mockData.slice(start, end);
}

jest.mock('../../api', () => ({
  __esModule: true,
  default: mockApi,
}));

afterEach(() => {
  cursor = -1;
});

test('renders 10 tiles', async () => {
  render(<App />);
  await waitForElementToBeRemoved(
    () => screen.queryAllByTestId('loading-component')[0]
  );
  expect(screen.getByText(mockData[0].firstNameLastName)).toBeInTheDocument();
  expect(screen.getByText(mockData[0].jobTitle)).toBeInTheDocument();
  expect(screen.getByText(mockData[0].emailAddress)).toBeInTheDocument();
  expect(screen.getByText(mockData[9].firstNameLastName)).toBeInTheDocument();
  expect(screen.getByText(mockData[9].jobTitle)).toBeInTheDocument();
  expect(screen.getByText(mockData[9].emailAddress)).toBeInTheDocument();
});

test('can select/deselect tile', async () => {
  render(<App />);
  await waitForElementToBeRemoved(
    () => screen.queryAllByTestId('loading-component')[0]
  );
  const firstTile = screen.getAllByTestId('person-tile')[0];
  userEvent.click(firstTile);
  expect(screen.getByText(/selected contacts: 1/i)).toBeInTheDocument();
  userEvent.click(firstTile);
  expect(screen.getByText(/selected contacts: 0/i)).toBeInTheDocument();
});

test('can select/deselect all', async () => {
  render(<App />);
  await waitForElementToBeRemoved(
    () => screen.queryAllByTestId('loading-component')[0]
  );
  const checkAllBtn = screen.getByRole('button', {
    name: /check all/i,
  });
  userEvent.click(checkAllBtn);
  expect(screen.getByText(/selected contacts: 10/i)).toBeInTheDocument();
  const UnCheckAll = screen.getByRole('button', {
    name: /uncheck all/i,
  });
  userEvent.click(UnCheckAll);
  expect(screen.getByText(/selected contacts: 0/i)).toBeInTheDocument();
});

test('can load more tiles', async () => {
  render(<App />);
  await waitForElementToBeRemoved(
    () => screen.queryAllByTestId('loading-component')[0]
  );
  const loadMoreBtn = screen.getByRole('button', {
    name: /more/i,
  });
  userEvent.click(loadMoreBtn);
  await waitForElementToBeRemoved(
    () => screen.queryAllByTestId('loading-component')[0]
  );
  expect(screen.getByText(mockData[10].firstNameLastName)).toBeInTheDocument();
  expect(screen.getAllByText(mockData[10].jobTitle)[0]).toBeInTheDocument();
  expect(screen.getByText(mockData[10].emailAddress)).toBeInTheDocument();
  expect(screen.getByText(mockData[19].firstNameLastName)).toBeInTheDocument();
  expect(screen.getAllByText(mockData[19].jobTitle)[0]).toBeInTheDocument();
  expect(screen.getByText(mockData[19].emailAddress)).toBeInTheDocument();
});

test('handle api error with try again button', async () => {
  jest.clearAllMocks();
  jest.spyOn(apiData, 'default').mockImplementation(async () => {
    throw new Error('Something went wrong');
  });
  render(<App />);
  await waitForElementToBeRemoved(
    () => screen.queryAllByTestId('loading-component')[0]
  );

  expect(
    screen.getByRole('button', {
      name: /try again/i,
    })
  ).toBeInTheDocument();
});
