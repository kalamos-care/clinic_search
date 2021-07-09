import React, { useContext, useState, useEffect, useRef, FC } from 'react'


import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

//import ClinicList from './ClinicList';
import SearchPanel from './SearchPanel';
import ClinicList from './ClinicList';

//import { ClinicAPI } from '../api/clinic_api';

// ClinicSearch should handle the request for data and then pass that to ClinicList. ClinicList currently has that functionality.
// Got useEffect code from https://reactjs.org/docs/faq-ajax.html because Axios wasn't working

const ClinicSearch: FC = () => {
    const searchTermEl = useRef("");
    //const zip: string = "";
    //const loading = false;

    return (
        <Grid container>
            <SearchPanel title="Find a Clinic">
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
                            onClick={() => searchTermEl.current
                            }
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
                <ClinicList zip={searchTermEl.current} />
            </SearchPanel>
        </Grid>
    );
};

export default ClinicSearch;

{/*
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
*/}