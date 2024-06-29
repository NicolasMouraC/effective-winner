import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Header, Card, ErrorCard } from './components';
import { getUsers, postFile } from './services/axios';

const App: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState<Boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    setError(null);
    setIsloading(true);

    try {
      const data = await getUsers(query);
      setFilteredData(data);
    } catch {
      setError('Error searching in file');
    } finally {
      setIsloading(false);
    }
  };

  const handleFileUpload = async (file: any) => {
    setError(null);
    setIsloading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      await postFile(formData);
      await handleSearch('');
      setQuery('');
    } catch {
      setError('Error uploading file');
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <div>
      <Header onFileUpload={handleFileUpload} setSearchQuery={setQuery} searchQuery={query} />
      <div className="flex flex-wrap justify-center grid-cols-4 gap-4 m-auto mt-5">
        {isLoading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress data-testid='loading-spinner'/>
          </Box>
        ) : (error || !filteredData?.length) ? (
              <ErrorCard error={error} query={query} />
            ) : filteredData.map((item, index) => (
              <Card key={index} item={item as any} query={query} />
          )
        )}
      </div>

    </div>
  );
};

export default App;
