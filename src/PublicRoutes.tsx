import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';

import Header from './layout/Header';
import Footer from './layout/Footer';

import { Home } from './pages/Home';
import { Clinic } from './pages/Clinic';

const useStyles = makeStyles((theme) => ({
  public: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  },
  footer: {
    display: 'flex',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    backgroundColor: '#f4effc',
    marginTop: '2rem',
    paddingBottom: '2rem',
  },
}));

export const PublicRoutes: FC = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Box className={classes.public}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clinic/:id" component={Clinic} />
        </Switch>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Box>


  );
};
