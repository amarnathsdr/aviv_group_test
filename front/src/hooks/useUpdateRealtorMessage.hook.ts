import { useQueryClient, useMutation } from 'react-query';

import { updateRealtorMessage } from '../services/realtors.service';

const useUpdateRealtorMessage = () => {
  const queryClient = useQueryClient();

  const updateReadMessage = useMutation(
    ({ realtorId, messageId }: { realtorId: number; messageId: number }) =>
      updateRealtorMessage(realtorId, messageId),
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries(['realtor', variables.realtorId], { exact: true });
        queryClient.invalidateQueries(['realtorMessages', variables.realtorId], {
          exact: true,
        });
      },
    },
  );

  return {
    updateReadMessage,
  };
};

export default useUpdateRealtorMessage;
