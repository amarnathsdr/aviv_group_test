import { useInfiniteQuery } from 'react-query';

import { fetchRealtorMessages } from '../services/realtors.service';
import { IPagination } from '../types/realtors.type';

const useFetchRealtorMessages = (realtorId: number | undefined) => {
  const {
    data: realtorMessages,
    isLoading: areRealtorMessagesLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['realtorMessages', realtorId],
    ({ pageParam = 1 }) => fetchRealtorMessages(realtorId, pageParam),
    {
      select: (data) => ({
        pages: data.pages.map((page) => page.data),
        pageParams: data.pageParams,
      }),
      enabled: !!realtorId,
      getNextPageParam: (lastPage) => {
        const pagination: IPagination = JSON.parse(lastPage.headers['x-pagination']);
        return pagination.next_page;
      },
    },
  );

  return {
    realtorMessages,
    areRealtorMessagesLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useFetchRealtorMessages;
