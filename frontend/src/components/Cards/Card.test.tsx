/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Card Component', () => {
  const mockItem = {
    name: 'Jonh Doe',
    city: 'New York',
    country: 'USA',
    favorite_sport: 'Basketball'
  };

  it('should render card', () => {
    const { getByTestId } = render(
      <Card item={mockItem} query={''} />
    );

    const cardElement = getByTestId('info-card');

    expect(cardElement).toBeInTheDocument();
  });

  it('should render card with highlighted search query', () => {
    const query = 'New York';

    const { getByText } = render(
      <Card item={mockItem} query={query} />
    );

    expect(getByText(query)).toBeInTheDocument();
    expect(getByText('USA')).toBeInTheDocument();
  });
});
