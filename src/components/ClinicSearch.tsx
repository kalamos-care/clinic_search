import React, { useContext, useRef, FC } from 'react'

import axios from 'axios';

import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import ClinicCard from './ClinicCard';
import SearchPanel from './SearchPanel';
//import FunctionsContext from '../context/FunctionsContext';

{/*
exports.handler = async (event) => {
  try {
    const qs = event.queryStringParameters;
    const query = Object.keys(qs).map(key => (`${key}=${qs[key]}`));
    const response = await fetch(`https://npin.cdc.gov/api/organization/proximity?${query.join('&')}`)
    const json = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(json),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {}
    }
  }
};
*/}


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
};


{/*
const SearchByZip: FC<Props> = ({ zip }) => (
    //const payload = axios.get('https://npin.cdc.gov/api/organization/proximity?prox[origin]=' + zip);
    //const clinics = response.data;

    return {
        field_org_id: "1",
    };
);
*/}

const ClinicList: FC<Props> = ({ zip }) => {

    const {
        proximity: {
            results,
            loading
        },
        updateProximityOrigin,
    } = useContext(FunctionsContext);
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
                            () => updateProximityOrigin(searchTermEl.current.value)
                        }
                    >
                        Submit
                    </Button>
                </form>
            </div>
            <ClinicList>
                <SearchByZip zip={searchTermEl}>
            </ClinicList>
        </SearchPanel>
    );
};

export default ClinicSearch;