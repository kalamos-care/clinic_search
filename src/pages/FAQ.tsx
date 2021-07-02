import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

const useStyles = makeStyles((theme) => ({

}));

export const FAQ: FC = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <PageTitle title="Frequently Asked Questions" />
        </Grid>
    );
};

export default FAQ;