import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

const UnauthenticatedApp: React.FC = () => {
  return (
    <div>
      <h1>Welcome to our app! Please log in or sign up.</h1>
      <Login />
      <SignUp />
    </div>
  );
};

export default UnauthenticatedApp;