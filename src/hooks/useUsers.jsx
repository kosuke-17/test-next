import { fetcher } from 'src/utils/fetcher';
import useSWR from 'swr'

export const useUsers = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  )
  console.log(data);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data === 0,
  };
};
