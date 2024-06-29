import React from 'react';
import Button from '@mui/material/Button';
import { FileUploadProps } from './types';

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <Button data-testid="upload-button" component="span">
      <input
        accept=".csv" onChange={handleFileChange}
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
        />
        <label htmlFor="raised-button-file">
          Upload
        </label>
    </Button>
  )
};

export default FileUpload;
