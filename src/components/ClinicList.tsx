import React, { FC } from 'react'

import axios from 'axios';

import { Grid } from '@material-ui/core'

import ClinicCard from './ClinicCard';

//import { ClinicType } from '../models/clinic.interface';
//import { Clinic } from '../api/clinic_api';

interface Props {
    zip: string,
};

const ClinicList: FC<Props> = ({ zip }) => {
    const loading = false;
    const clinicSearchUrl: string = 'https://npin.cdc.gov/api/organization/proximity?prox[origin]=' + zip;
    const clinics: any = axios.get(clinicSearchUrl, { headers: { "Access-Control-Allow-Origin": true } });

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            {
                clinics.length ? clinics.map((clinic: any) =>
                    <Grid
                        item
                        key={clinic.field_org_id}
                    >
                        <ClinicCard
                            title={clinic.title_field}
                            subtitle={[
                                `${clinic.field_org_street1} ${clinic.field_org_street2} ${clinic.field_org_city_name}, ${clinic.field_org_state} ${clinic.field_org_zipcode}`,
                                clinic.field_org_phone,
                            ]}
                            action="Select"
                        />
                    </Grid>
                ) : <Grid item>{loading ? 'Loading' : 'No Results'}</Grid>
            }
        </Grid>
    );
};

export default ClinicList;