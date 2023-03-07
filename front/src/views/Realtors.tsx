import { Outlet, useMatch } from 'react-router-dom';

import Header from '../components/Header';
import RealtorMessageList from '../components/RealtorMessageList';

function Realtors(props: { isMobile: boolean }) {
  const match = useMatch('/realtors/:realtorId/message/:messageId');

  return (
    <div className="h-screen">
      <Header />
      <div className="realtors flex h-full pt-16">
        {!props.isMobile ? (
          <>
            <RealtorMessageList isMobile={props.isMobile} />
            <Outlet />
          </>
        ) : match ? (
          <Outlet />
        ) : (
          <RealtorMessageList isMobile={props.isMobile} />
        )}
      </div>
    </div>
  );
}
export default Realtors;
