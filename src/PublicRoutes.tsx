import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
// import { makeStyles } from '@material-ui/core/styles';

import { Home } from './pages/Home';

export const PublicRoutes: FC = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
