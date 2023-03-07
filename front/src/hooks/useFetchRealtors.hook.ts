import { useQuery } from 'react-query';

import { fetchRealtors } from '../services/realtors.service';

const useFetchRealtors = () => {
  const { data: realtors, isLoading: areRealtorsLoading } = useQuery(
    ['realtors'],
    async () => await fetchRealtors(),
    {
      select: (response) => response.data,
    },
  );
  return {
    realtors,
    areRealtorsLoading,
  };
};

export default useFetchRealtors;
