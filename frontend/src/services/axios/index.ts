import axios from 'axios';

const backendURL = process.env.REACT_APP_API_URL;

export const getUsers = async (query: string) => {
  const data = await axios.get(`${backendURL}/api/users?q=${query}`);
  return data.data.data[0];
};

export const postFile = async (formData: any) => {
  await axios.post(
    `${backendURL}/api/files`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }
  });
}