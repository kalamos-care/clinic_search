import React, { FC, useState } from 'react';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Box, Grid } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({

}));

interface RouteParams {
    id: string
}

export const Clinic: FC = () => {
    const classes = useStyles();

    const params = useParams<RouteParams>();

    return (
        <Container maxWidth="md">
            <Grid>
                <p>This is clinic {params.id}</p>
            </Grid>
        </Container>
    );
};

export default Clinic;