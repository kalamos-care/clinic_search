import React, { useContext, useRef, FC } from 'react'

import axios from 'axios';

import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import ClinicCard from './ClinicCard';
import SearchPanel from './SearchPanel';

import { ClinicType } from '../models/clinic.interface';
import { Clinic } from '../api/clinic_api';

interface Props {
    //payload = {},
    zip: string,
    clinics: [],
    clinic: {
        field_org_id: string,
        title_field: string,
        field_org_street1: string,
        field_org_street2: string,
        field_org_city_name: string,
        field_org_state: string,
        field_org_zipcode: string,
        field_org_phone: string,
    },
    loading: boolean,
};

const ClinicList: FC<Props> = ({ zip }) => {
    const loading = false;
    const clinics = axios.get('https://npin.cdc.gov/api/organization/proximity?prox[origin]=' + zip);

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            {
                clinics.length ? clinics.map((clinic) =>
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

const ClinicSearch = () => {
    const searchTermEl = "";
    const updateProximityOrigin = ();

    return (
        <SearchPanel title="Find a Clinic">
            <div>
                <form>
                    <TextField
                        inputRef={searchTermEl}
                        placeholder="Enter Location"
                    />
                    <Button
                        variant="text"
                        color="default"
                        type="button"
                        onClick={
                            () => searchTermEl.current.value
                        }
                    >
                        Submit
                    </Button>
                </form>
            </div>
            <ClinicList zip={searchTermEl} />
        </SearchPanel>
    );
};

export default ClinicSearch;