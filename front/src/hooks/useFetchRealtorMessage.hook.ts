import { useQuery } from 'react-query';

import { fetchRealtorMessage } from '../services/realtors.service';

const useFetchRealtorMessage = (
  realtorId: number | undefined,
  messageId: number | undefined,
) => {
  const { data: realtorMessage, isLoading: isRealtorMessageLoading } = useQuery(
    ['realtorMessage', realtorId, messageId],
    async () => await fetchRealtorMessage(realtorId, messageId),
    {
      enabled: !!realtorId && !!messageId,
      select: (response) => response.data,
    },
  );
  return {
    realtorMessage,
    isRealtorMessageLoading,
  };
};

export default useFetchRealtorMessage;
