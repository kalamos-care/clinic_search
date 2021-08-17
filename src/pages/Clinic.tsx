import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Grid, Typography, Button, IconButton } from '@material-ui/core/';
import ShareIcon from '@material-ui/icons/Share';

import PageTitle from '../components/PageTitle';

import { ClinicType } from '../models/clinic.interface';
import { ClinicAPI } from '../api/clinic_api';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    clinicServices: {
        paddingTop: theme.spacing(2),
    },
    jsonResponse: {
        paddingTop: theme.spacing(2),
    },
}));

interface RouteParams {
    id: string
}

export const Clinic: FC = () => {
    const classes = useStyles();

    const param = useParams<RouteParams>();

    const [ClinicData, setClinicData] = React.useState<ClinicType>();
    useEffect(() => {
        ClinicAPI
            .getAClinic(param.id)
            .then(data => setClinicData(data))
    }, []);

    const [show, setShow] = useState(false);

    const handleShareOnClick = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: `${ClinicData?.data.title}`,
                    text: `Check out this clinic on Kalamos`,
                    url: document.location.href,
                })
                .then(() => {
                    console.log('Successfully shared');
                })
                .catch(error => {
                    console.error('Something went wrong. Please check your browser.', error);
                });
        }
    };

    return (
        <Grid container>
            <Grid container spacing={1}>
                <Grid item xs={11}>
                    <PageTitle title={`${ClinicData?.data.title}`} />
                    <Typography variant="h6">
                        {ClinicData?.data.location.street1}
                    </Typography>
                    {/*
                {ClinicData?.data.location.street2.length > 0
                    <Typography variant="h6">
                        {ClinicData?.data.location.street2}
                    </Typography>
                }
                */}
                    <Typography variant="h6">
                        {ClinicData?.data.location.city}, {ClinicData?.data.location.state} {ClinicData?.data.location.zipcode}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <ul>
                        {ClinicData?.data.websites.map((website) => (
                            <li key={website}>{website}</li>
                        ))}
                        </ul>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton
                        aria-label="share"
                        onClick={handleShareOnClick}
                    >
                        <ShareIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.clinicServices}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            Services
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5">
                            Care
                        </Typography>
                        <ul>
                            {ClinicData?.data.services.care.map((careService) => (
                                <li key={careService}>{careService}</li>
                            ))}
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5">
                            Prevention
                        </Typography>
                        <ul>
                            {ClinicData?.data.services.prevention.map((preventionService) => (
                                <li key={preventionService}>{preventionService}</li>
                            ))}
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5">
                            Support
                        </Typography>
                        <ul>
                            {ClinicData?.data.services.support.map((supportService) => (
                                <li key={supportService}>{supportService}</li>
                            ))}
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h5">
                            Testing
                        </Typography>
                        <ul>
                            {ClinicData?.data.services.testing.map((testingService) => (
                                <li key={testingService}>{testingService}</li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>

            </Grid>
            <Grid container spacing={1} className={classes.jsonResponse}>
                <Grid item xs={12}>
                    <Button onClick={() => setShow(prev => !prev)}>Show JSON</Button>
                    {show && <pre>{JSON.stringify(ClinicData?.data, null, 2)}</pre>}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Clinic;