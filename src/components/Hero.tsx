import React, { FC } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    hero: {
        margin: theme.spacing(4, 0),
    },
    heroContent: {
        padding: theme.spacing(4),
    }
}));

export const Hero: FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <Grid container spacing={2} justify="center" className={classes.hero}>
                    <Grid item xs={12} className={classes.heroContent}>
                        <Typography variant="h3" align="center" gutterBottom>PrEP is lifesaving-<br />but what is PrEP?</Typography>
                        <Typography variant="h6" gutterBottom>Often times, we think of PrEP as a pill, and it is!</Typography>
                        <Typography variant="h6" gutterBottom>It's more than that though. PreExposure Prophylaxis means taking actions to protect yourself and your community before having sex and other activities.</Typography>
                        <Typography variant="subtitle1" gutterBottom>If you're interested in PrEP medication or other sexual health resources, just enter your zip code below.</Typography>
                    </Grid>
            </Grid>
        </Container>
    );
};

export default Hero;