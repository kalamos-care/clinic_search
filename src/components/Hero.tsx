import React, { FC } from 'react';

import { Grid, Typography } from '@material-ui/core';

export const Hero: FC = () => {

    return (
        <Grid container spacing={2} justify="center">
            <Grid item xs={12}>
                <h1>PrEP is lifesaving—but what is PrEP?</h1>
                <h3>Often times, we think of PrEP as a pill, and it is!</h3>
                <h3>It's more than that though. Preexposure prophylaxis means taking actions to protect yourself and your community before having sex and other activities.</h3>
                <h3>If you're interested in PrEP medication or other sexual health resources, just enter your zip code below.</h3>
            </Grid>
        </Grid>
    );
};

export default Hero;