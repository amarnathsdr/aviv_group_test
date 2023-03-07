import { UIEvent } from 'react';
import { useParams } from 'react-router-dom';
import useFetchRealtorMessages from '../hooks/useFetchRealtorMessages.hook';
import { IRealtorMessage } from '../types/realtors.type';

import RealtorMessage from './RealtorMessage';

function RealtorMessageList(props: { isMobile: boolean }) {
  const { realtorId } = useParams();
  const {
    realtorMessages,
    areRealtorMessagesLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useFetchRealtorMessages(realtorId ? parseInt(realtorId, 10) : undefined);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    if (
      target.scrollHeight - target.scrollTop <= target.offsetHeight * 1.1 &&
      !isFetchingNextPage &&
      hasNextPage
    ) {
      fetchNextPage();
    }
  };

  return (
    <div
      data-testid="realtor-message-list"
      className={`flex flex-col h-full overflow-scroll ${
        props.isMobile ? 'w-full' : ' w-1/4'
      }`}
      onScroll={handleScroll}
    >
      {realtorMessages?.pages?.map((page) =>
        page?.map((realtorMessage: IRealtorMessage) => (
          <RealtorMessage
            data-testid={'message' + realtorMessage.id}
            key={realtorMessage.id}
            message={realtorMessage}
            isLoading={areRealtorMessagesLoading}
          />
        )),
      )}
    </div>
  );
}
export default RealtorMessageList;
