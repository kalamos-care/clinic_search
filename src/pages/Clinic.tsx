import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios, { AxiosResponse } from 'axios';

import { Grid } from '@material-ui/core/';

import PageTitle from '../components/PageTitle';


const useStyles = makeStyles((theme) => ({

}));

const instance = axios.create({
    baseURL: 'https://underwater.hack.fail/v1',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;
interface RouteParams {
    id: string
}

export const Clinic: FC = () => {
    const classes = useStyles();

    const param = useParams<RouteParams>();

    const getClinicData = instance.get(`/test-centers/${param.id}`).then(responseBody);
    console.log(getClinicData);

    return (
        <Grid container>
            <PageTitle title={`This is clinic ${param.id}`} />
            <Grid item xs={12}>
                <pre>{JSON.stringify(getClinicData, null, 2)}</pre>
            </Grid>
        </Grid>
    );
};

export default Clinic;