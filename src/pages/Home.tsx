import React, { FC, useState } from 'react';

import {
  Switch,
  Route,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Redirect,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Box, Container, Divider } from '@material-ui/core/';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ClinicSearch from "../components/ClinicSearch"
import Hero from '../components/Hero';

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
    fontSize: 'calc(10px + 2vmin)',
    paddingTop: theme.spacing(4),
  },
  footer: {
    display: 'flex',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
  },
}));

export const Home: FC = () => {
  const classes = useStyles();

  return (
      <Box className={classes.public}>
        <header className={classes.header}>
          <Header />
        </header>
        <main className={classes.main}>
          <Container maxWidth="md">
            <Hero />
            <Divider />
            <ClinicSearch />
          </Container>
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </Box>
  );
};