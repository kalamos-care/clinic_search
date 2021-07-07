import React, { FC } from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { PublicRoutes } from './PublicRoutes';
import ScrollToTop from './ScrollToTop';

import theme from './theme';


const useStyles = makeStyles((theme) => ({

}));

const App: FC = () => {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename={'/'}>
        <CssBaseline />
        <ScrollToTop />
        <PublicRoutes />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;