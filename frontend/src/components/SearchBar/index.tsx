import React from 'react';
import TextField from '@mui/material/TextField';
import { SearchBarProps } from './types';
  
const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  
  return (
    <TextField
      data-testid="search-input"
      id="outlined-basic"
      label="Search"
      variant="outlined"
      value={query}
      onChange={handleInputChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;