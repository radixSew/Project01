import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UsersView from './UsersView';
import UserInfoView from './UserInfoView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/radixSew/Project01" element={<UsersView />} />
        <Route path="/user/:userId" element={<UserInfoView />} />
      </Routes>
    </Router>
  );
};

export default App;
