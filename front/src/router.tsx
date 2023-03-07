import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Realtors from './views/Realtors';
import RealtorMessageDetails from './components/RealtorMessageDetails';
import RealtorMessageDetailsEmpty from './components/RealtorMessageDetailsEmpty';
import NotFound from './views/NotFound';

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
          <Route index element={<RealtorMessageDetailsEmpty />}></Route>
          <Route
            path="message/:messageId?"
            element={<RealtorMessageDetails isMobile={isMobile} />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
