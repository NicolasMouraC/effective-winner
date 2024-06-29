/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorCard from './ErrorCard';

describe('ErrorCard Component', () => {
  const mockError = 'File upload failed';

  it('should render ErrorCard component with error message', () => {
    const { getByText } = render(
      <ErrorCard error={mockError} />
    );

    const errorTitleElement = getByText(mockError);

    expect(errorTitleElement).toBeInTheDocument();
  });
});
