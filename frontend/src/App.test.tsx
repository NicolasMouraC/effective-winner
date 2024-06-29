/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders file upload and search bar', () => {
  render(<App />);
  const fileInput = screen.getByTestId('upload-button').querySelector('input');
  const searchInput = screen.getByPlaceholderText(/search/i);
  expect(fileInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});

test('uploads wrong file type and expect error message', async () => {
  render(<App />);
  const fileInput = screen.getByTestId('upload-button').querySelector('input');

  const file = new File(['name,city,country,favorite_sport\nJohn Doe,New York,USA,Basketball'], 'test.txt', { type: 'text/csv' });

  fireEvent.change((fileInput as any), { target: { files: [file] } });
  expect(await screen.findByText('Please make sure it is a csv file and try again')).toBeInTheDocument();
});

