import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './views/Home';
import Realtors from './views/Realtors';
import RealtorsMessageDetails from './components/RealtorMessageDetails';
import RealtorsMessageDetailsEmpty from './components/RealtorsMessageDetailsEmpty';
import NotFound from './views/NotFound';
import RealtorsMessageList from './components/RealtorsMessageList';

const Router = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 770) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/realtors/:realtorId?" element={<Realtors isMobile={isMobile} />}>
          <Route index element={<RealtorsMessageDetailsEmpty />}></Route>
          <Route
            path="message/:messageId?"
            element={<RealtorsMessageDetails isMobile={isMobile} />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
