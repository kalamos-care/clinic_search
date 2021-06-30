import React, { useContext, useRef, FC } from 'react'

import axios from 'axios';

import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import ClinicCard from './ClinicCard';
import ClinicList from './ClinicList';
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