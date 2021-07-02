import React, { FC, useState } from 'react';

import {
  Switch,
  Route,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Redirect,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Divider } from '@material-ui/core/';

import Hero from '../components/Hero';
import ClinicSearch from '../components/ClinicSearch';

const useStyles = makeStyles((theme) => ({

}));

export const Home: FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Hero />
      <Divider />
      <ClinicSearch />
    </Container>
  );
};