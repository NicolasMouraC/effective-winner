import React from 'react';
import FileUpload from '../FileUpload';
import SearchBar from '../SearchBar';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ onFileUpload, setSearchQuery, searchQuery }) => {
  return (
    <div className="flex justify-between p-2 items-center border-2 border-black">
      <SearchBar setQuery={setSearchQuery} query={searchQuery} />
      <FileUpload onFileUpload={onFileUpload} />
    </div>
  );
};

export default Header;
