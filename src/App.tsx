import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/">
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;