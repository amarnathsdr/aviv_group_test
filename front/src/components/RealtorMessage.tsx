import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as dayjs from 'dayjs';
import { List } from 'react-content-loader';

import { ReactComponent as MailIcon } from '../../../assets/icon-mail.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/icon-phone.svg';
import { IRealtorMessage } from '../types/realtors.type';
import useUpdateRealtorMessage from '../hooks/useUpdateRealtorMessage.hook';

dayjs.extend(relativeTime);

function RealtorMessage(props: { message: IRealtorMessage; isLoading: boolean }) {
  const { realtorId, messageId } = useParams();
  const navigate = useNavigate();
  const { updateReadMessage } = useUpdateRealtorMessage();

  const isMail = () => {
    return props.message.type === 'email';
  };

  const isMessageReadedStyle = () => {
    return props.message.read ? 'text-gray-400 bg-gray-50' : 'text-primary';
  };

  const messageDate = () => {
    let date = '';
    if (dayjs(props.message.date).isSame(dayjs(), 'day')) {
      date = dayjs(props.message.date).format('H:mm');
    } else if (dayjs(props.message.date).isSame(dayjs().subtract(1, 'day'), 'day')) {
      date = dayjs(props.message.date).fromNow();
    } else if (dayjs(props.message.date).isAfter(dayjs().subtract(1, 'week'))) {
      date = dayjs(props.message.date).format('dddd');
    } else {
      date = dayjs(props.message.date).format('DD/MM/YY');
    }
    return date;
  };

  const showMessageDetails = (messageId: number) => {
    navigate(`message/${messageId}`);
    if (realtorId && props.message.read === false) {
      updateReadMessage.mutate({ realtorId: parseInt(realtorId, 10), messageId });
    }
  };

  if (props.isLoading) {
    return (
      <div className="flex p-4 border-b border-r border-gray-300 cursor-pointer hover:bg-gray-50">
        <List />
      </div>
    );
  }

  return (
    <div
      className={`flex p-4 border-b border-r border-gray-300 cursor-pointer hover:bg-gray-50 ${isMessageReadedStyle()}`}
      onClick={() => showMessageDetails(props.message.id)}
    >
      <div className="mt-1">
        {isMail() ? (
          <MailIcon className={isMessageReadedStyle()} />
        ) : (
          <PhoneIcon className={isMessageReadedStyle()} />
        )}
      </div>
      <div className="flex flex-col ml-4 w-full">
        <div className="flex justify-between">
          <span className="font-bold">
            {props.message.contact.firstname} {props.message.contact.lastname}
          </span>
          <span className={isMessageReadedStyle()}> {messageDate()} </span>
        </div>
        <span className="text-sm text-gray-800">{props.message.subject}</span>
        <span className="text-sm text-gray-700 line-clamp-2">{props.message.body}</span>
      </div>
    </div>
  );
}
export default RealtorMessage;
