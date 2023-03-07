import * as dayjs from 'dayjs';
import { Facebook, List } from 'react-content-loader';
import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as OpenEmailIcon } from '../../../assets/icon-mail-open.svg';
import useFetchRealtorMessage from '../hooks/useFetchRealtorMessage.hook';

function RealtorMessageDetails(props: { isMobile: boolean }) {
  const navigate = useNavigate();
  const { realtorId, messageId } = useParams();

  const { realtorMessage, isRealtorMessageLoading } = useFetchRealtorMessage(
    realtorId ? parseInt(realtorId, 10) : undefined,
    messageId ? parseInt(messageId, 10) : undefined,
  );

  const messageListRedirection = () => {
    navigate(`/realtors/${realtorId}`);
  };

  if (isRealtorMessageLoading) {
    return (
      <div
        className={`flex flex-col bg-gray-100 p-8 ${props.isMobile ? 'w-full' : 'w-3/4'}`}
      >
        <div className="flex contact bg-white rounded w-full mb-6 p-6">
          <Facebook />
        </div>
        <div className="flex flex-col bg-white rounded w-full grow p-6">
          <List />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col bg-gray-100 p-8 ${props.isMobile ? 'w-full' : 'w-3/4'}`}
    >
      {props.isMobile && (
        <div
          className="mb-4 underline italic cursor-pointer"
          onClick={messageListRedirection}
        >
          Back to message list
        </div>
      )}
      <div className="flex contact bg-white rounded w-full mb-6 p-6">
        <OpenEmailIcon className="text-gray-300" />
        <div className="ml-4 w-full">
          <span className="font-bold">
            {realtorMessage?.contact.firstname} {realtorMessage?.contact.lastname}
          </span>
          <div className="mt-2">
            <div className="flex">
              <span className="w-1/4"> Email </span>
              <span className="w-3/4 text-primary">{realtorMessage?.contact.email}</span>
            </div>
            <div className="flex mt-1">
              <span className="w-1/4"> Phone </span>
              <span className="w-3/4 text-primary">{realtorMessage?.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded w-full grow p-6">
        <span className="font-bold text-lg">
          {realtorMessage?.contact.firstname} {realtorMessage?.contact.lastname}
        </span>
        <span className="text-gray-500 mt-2">
          {dayjs(realtorMessage?.date).format('D MMMM YYYY')} at
          {dayjs(realtorMessage?.date).format('hh:mm')}
        </span>
        <span className="text-sm mt-8">{realtorMessage?.body}</span>
      </div>
    </div>
  );
}
export default RealtorMessageDetails;
