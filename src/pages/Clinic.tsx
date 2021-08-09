import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

import { ClinicType } from '../models/clinic.interface';
import { ClinicAPI } from '../api/clinic_api';


// const useStyles = makeStyles((theme) => ({

// }));

interface RouteParams {
    id: string
}

export const Clinic: FC = () => {
    //const classes = useStyles();

    const param = useParams<RouteParams>();

    const [ClinicData, setClinicData] = React.useState<ClinicType>();
    useEffect(() => {
        ClinicAPI
            .getAClinic(param.id)
            .then(data => setClinicData(data))
    }, []);
    
    return (
        <Grid container>
            <PageTitle title={`${ClinicData?.data.title}`} />
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
                <pre>{JSON.stringify(ClinicData?.data, null, 2)}</pre>
            </Grid>
        </Grid>
    );
};

export default Clinic;