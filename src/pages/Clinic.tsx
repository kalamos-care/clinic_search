import React, { FC, useState } from 'react';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@material-ui/core/';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

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
        position: 'absolute',
        width: '100%',
        bottom: '0',
        backgroundColor: '#f4effc',
    },
}));

interface RouteParams {
    id: string
}

export const Clinic: FC = () => {
    const classes = useStyles();

    const params = useParams<RouteParams>();

    return (
        <Box className={classes.public}>
            <header className={classes.header}>
                <Header />
            </header>
            <main className={classes.main}>
                <p>This is clinic {params.id}</p>
            </main>
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </Box>
    );
};

export default Clinic;