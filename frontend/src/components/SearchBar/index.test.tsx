import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '.';

const mockSetQuery = jest.fn();
const props = {
  query: '',
  setQuery: mockSetQuery,
};

describe('SearchBar Component', () => {
  it('should update query state on input change', () => {
    const mockSetQuery = jest.fn();

    const { getByTestId } = render(
      <SearchBar query="" setQuery={mockSetQuery} />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-node-access
    const input = getByTestId('search-input').querySelector('input');
    fireEvent.change(input!, { target: { value: 'test' } });

    expect(mockSetQuery).toHaveBeenCalledWith('test');
  });
  
  it('renders SearchBar component', () => {
    render(<SearchBar {...props} />);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});