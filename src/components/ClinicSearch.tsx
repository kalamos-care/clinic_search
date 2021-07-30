import React, { useRef, useEffect, FC } from 'react'

//import { Link as RouterLink } from 'react-router-dom';

import { Button, TextField, Grid, Typography } from '@material-ui/core'
//import { Grid, List, ListItem, Divider, ListItemText, Typography, Link } from '@material-ui/core'

import ClinicList from './ClinicList';
import { ClinicAPI } from '../api/clinic_api';
//import { ClinicType } from '../models/clinic.interface';

//import { ClinicAPI } from '../api/clinic_api';

// ClinicSearch should handle the request for data and then pass that to ClinicList. ClinicList currently has that functionality.
// Got useEffect code from https://reactjs.org/docs/faq-ajax.html because Axios wasn't working

const ClinicSearch: FC = () => {
    const searchTermEl = useRef("");
    const RandomClinics = ClinicAPI.getRandomClinics();

    // const [ClinicListData, setClinicListData] = React.useState<ClinicListType>();
    // useEffect(() => {
    //     ClinicAPI
    //         .getClinicsByZip(JSON.stringify(searchTermEl))
    //         .then(data => setClinicListData(data))
    // }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2">
                    Find a Clinic
                </Typography>
            </Grid>
            <Grid item xs={12}>
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
                        onClick={() => searchTermEl
                        }
                    >
                        Submit
                    </Button>
                </form>
            </Grid>
            <ClinicList zip={searchTermEl.current} />
        </Grid>
    );
};

export default ClinicSearch;

/*
    if (error) {
        <div>Error: {error?.message}</div>
    }
    else if (!isLoaded) {
        <div>Loading...</div>
    }
    else {
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    }
*/