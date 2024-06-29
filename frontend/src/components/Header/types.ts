export interface HeaderProps {
  onFileUpload: (file: File) => void;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}