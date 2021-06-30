import React, { FC, useState } from 'react';

import {
  Switch,
  Route,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Redirect,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Box, Container, Grid, Divider } from '@material-ui/core/';

import Header from '../layout/Header';
import ClinicSearch from "../components/ClinicSearch"

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
  heroContent: {
    //padding: theme.spacing(4),
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
            <Grid container spacing={2} justify="center" className={classes.heroContent}>
              <Grid item xs={12}>
                <h1>PrEP is lifesaving—but what is PrEP?</h1>
                <h3>Often times, we think of PrEP as a pill, and it is!</h3>
                <h3>It's more than that though. Preexposure prophylaxis means taking actions to protect yourself and your community before having sex and other activities.</h3>
                <h3>If you're interested in PrEP medication or other sexual health resources, just enter your zip code below.</h3>
              </Grid>
            </Grid>
            <Divider />
            <Grid container>
              <Grid item xs={12}>
                <h2>Insert search function here</h2>
                {/* <ClinicSearch /> */}
              </Grid>
            </Grid>
          </Container>
        </main>
      </Box>
  );
};