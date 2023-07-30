import React from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthenticatedApp: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.displayName}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default AuthenticatedApp;