import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileUpload from '../FileUpload';

describe('FileUpload Component', () => {
  it('should call onFileUpload with selected file', () => {
    const mockOnFileUpload = jest.fn();

    const { getByTestId } = render(
      <FileUpload onFileUpload={mockOnFileUpload} />
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-node-access
    const input = getByTestId('upload-button').querySelector('input');

    const file = new File(['test content'], 'test.csv', { type: 'text/csv' });

    fireEvent.change(input!, { target: { files: [file] } });

    expect(mockOnFileUpload).toHaveBeenCalledWith(file);
  });
});
