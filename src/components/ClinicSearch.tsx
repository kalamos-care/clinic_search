import React, { useContext, useRef, FC } from 'react'

import axios from 'axios';

import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

//import ClinicList from './ClinicList';
import SearchPanel from './SearchPanel';
import ClinicCard from './ClinicCard';

import { Clinic } from '../api/clinic_api';

// ClinicSearch should handle the request for data and then pass that to ClinicList. ClinicList currently has that functionality.

const ClinicSearch: FC = () => {
    const searchTermEl = useRef("");
    const zip: string = "";
    const loading = false;
    //const clinicSearchUrl: string = 'https://npin.cdc.gov/api/organization/proximity?prox[origin]=' + zip;
    const clinics: any = Clinic.getClinicsByZip(zip);

    return (
        <SearchPanel title="Find a Clinic">
            <Grid>
                <form>
                    <TextField
                        id="searchTerm"
                        type="text"
                        inputRef={searchTermEl}
                        placeholder="Enter Location"
                    />
                    <Button
                        variant="text"
                        color="default"
                        type="button"
                        onClick={() => searchTermEl.current
                        }
                    >
                        Submit
                    </Button>
                </form>
            </Grid>
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
            {/* <ClinicList zip={searchTermEl.current} /> */}
        </SearchPanel>
    );
};

export default ClinicSearch;