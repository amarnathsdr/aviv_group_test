import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ReactComponent as AvivLogo } from '../../../assets/logo-aviv.svg';
import { ReactComponent as MailCounterIcon } from '../../../assets/icon-counter.svg';

import type { IRealtor } from '../types/realtors.type';
import useFetchRealtors from '../hooks/useFetchRealtors.hook';
import useFetchRealtor from '../hooks/useFetchRealtor.hook';

const Header = () => {
  const navigate = useNavigate();
  const { realtorId } = useParams();
  const { realtors, areRealtorsLoading } = useFetchRealtors();
  const [selectedRealtor, setSelectedRealtor] = useState(realtorId ?? '');

  const selectRealtor = (realtorId: string) => {
    setSelectedRealtor(realtorId);
    navigate(`/realtors/${realtorId}`);
  };

  if (selectedRealtor === '' && realtors?.[0].id) {
    selectRealtor(realtors?.[0].id.toString());
  }

  const { realtor, isRealtorLoading } = useFetchRealtor(
    realtorId ? parseInt(realtorId, 10) : undefined,
  );

  return (
    <div className="flex h-16 bg-white fixed top-0 left-0 right-0 items-center justify-between drop-shadow-lg px-6">
      <AvivLogo />
      <div className="flex">
        <div
          className={`flex items-center h-8 py-2 px-3 rounded-md mx-8 ${
            realtor?.unread_messages ? 'bg-primary' : 'bg-gray-500'
          }`}
        >
          <MailCounterIcon className="text-white" />
          <span className="ml-2 text-white"> {realtor?.unread_messages ?? 0} </span>
        </div>
        <select
          className="rounded"
          value={selectedRealtor}
          onChange={(e) => selectRealtor(e.target.value)}
        >
          {realtors?.map((realtor: IRealtor) => (
            <option value={realtor.id} key={realtor.id}>
              {realtor.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
