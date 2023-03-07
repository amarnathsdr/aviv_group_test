import { Fragment } from 'react';
import { Outlet, useMatch } from 'react-router-dom';

import Header from '../components/Header';
import RealtorsMessageList from '../components/RealtorsMessageList';

function Realtors(props: { isMobile: boolean }) {
  const match = useMatch('/realtors/:realtorId/message/:messageId');

  return (
    <div className="h-screen">
      <Header />
      <div className="realtors flex h-full pt-16">
        {!props.isMobile ? (
          <Fragment>
            <RealtorsMessageList isMobile={props.isMobile} />
            <Outlet />
          </Fragment>
        ) : match ? (
          <Outlet />
        ) : (
          <RealtorsMessageList isMobile={props.isMobile} />
        )}
      </div>
    </div>
  );
}
export default Realtors;
