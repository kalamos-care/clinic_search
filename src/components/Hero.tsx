import React, { FC } from 'react';

import { Grid, Typography } from '@material-ui/core';

export const Hero: FC = () => {

    return (
        <Grid container spacing={2} justify="center">
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>PrEP is lifesaving—but what is PrEP?</Typography>
                <Typography variant="h4" gutterBottom>Often times, we think of PrEP as a pill, and it is!</Typography>
                <Typography variant="h4" gutterBottom>It's more than that though. PreExposure Prophylaxis means taking actions to protect yourself and your community before having sex and other activities.</Typography>
                <Typography variant="h4" gutterBottom>If you're interested in PrEP medication or other sexual health resources, just enter your zip code below.</Typography>
            </Grid>
        </Grid>
    );
};

export default Hero;