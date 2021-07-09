import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';
import ClinicCard from '../components/ClinicCard';

import { ClinicType } from '../models/clinic.interface';
import { ClinicAPI } from '../api/clinic_api';


const useStyles = makeStyles((theme) => ({

}));

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

    //console.log(ClinicData);

    return (
        <Grid container>
            <PageTitle title={`Clinic: ${ClinicData?.data.name1}`} />
            <Grid item xs={12}>
                <pre>{JSON.stringify(ClinicData, null, 2)}</pre>
            </Grid>
        </Grid>
    );
};

export default Clinic;