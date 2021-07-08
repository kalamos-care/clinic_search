import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios, { AxiosResponse } from 'axios';

import { Grid } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';

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


    const [ClinicData, setClinicData] = React.useState();
    useEffect(() => {
        ClinicAPI
          .getAClinic(param.id)
          .then(data => setClinicData(data))
    }, []);

    //console.log(ClinicData);

    return (
        <Grid container>
            <PageTitle title={`This is clinic ${param.id}`} />
            {/*<p>{ClinicData.data.name1}</p>*/}
            <Grid item xs={12}>
                <pre>{JSON.stringify(ClinicData, null, 2)}</pre>
            </Grid>
        </Grid>
    );
};

export default Clinic;