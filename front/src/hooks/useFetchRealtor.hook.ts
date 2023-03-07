import { useQuery } from 'react-query';

import { fetchRealtor } from '../services/realtors.service';

const useFetchRealtor = (realtorId: number | undefined) => {
  const { data: realtor, isLoading: isRealtorLoading } = useQuery(
    ['realtor', realtorId],
    async () => await fetchRealtor(realtorId),
    {
      enabled: !!realtorId,
      select: (response) => response.data,
    },
  );
  return {
    realtor,
    isRealtorLoading,
  };
};

export default useFetchRealtor;
