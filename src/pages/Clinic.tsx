import React, { FC } from 'react';

import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

const useStyles = makeStyles((theme) => ({

}));

interface RouteParams {
    id: string
}

export const Clinic: FC = () => {
    const classes = useStyles();

    const params = useParams<RouteParams>();

    return (
        <Grid container>
            <PageTitle title={`This is clinic ${params.id}`} />
        </Grid>
    );
};

export default Clinic;