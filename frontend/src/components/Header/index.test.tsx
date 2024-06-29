/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '.';

describe('Header Component', () => {
  const mockOnFileUpload = jest.fn();
  const mockSetSearchQuery = jest.fn();
  const mockSearchQuery = '';

  it('should render Header component with SearchBar and FileUpload', () => {
    const { getByTestId } = render(
      <Header
        onFileUpload={mockOnFileUpload}
        setSearchQuery={mockSetSearchQuery}
        searchQuery={mockSearchQuery}
      />
    );

    const searchBarElement = getByTestId('search-input');
    const fileUploadElement = getByTestId('upload-button');

    expect(searchBarElement).toBeInTheDocument();
    expect(fileUploadElement).toBeInTheDocument();
  });

  it('SearchBar should be in document', () => {
    const { getByTestId } = render(
      <Header
        onFileUpload={mockOnFileUpload}
        setSearchQuery={mockSetSearchQuery}
        searchQuery={mockSearchQuery}
      />
    );

    const searchBarComponent = getByTestId('search-input');

    expect(searchBarComponent).toBeInTheDocument();
  });

  it('FileUpload should be in document', () => {
    const { getByTestId } = render(
      <Header
        onFileUpload={mockOnFileUpload}
        setSearchQuery={mockSetSearchQuery}
        searchQuery={mockSearchQuery}
      />
    );

    const fileUploadComponent = getByTestId('upload-button');

    expect(fileUploadComponent).toBeInTheDocument();
  });
});
