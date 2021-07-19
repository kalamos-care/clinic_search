import React, { useRef, useEffect, FC } from 'react'

//import { Link as RouterLink } from 'react-router-dom';

import { Button, TextField, Grid } from '@material-ui/core'
//import { Grid, List, ListItem, Divider, ListItemText, Typography, Link } from '@material-ui/core'

import ClinicList from './ClinicList';
import SearchPanel from './SearchPanel';
//import { ClinicAPI } from '../api/clinic_api';
//import { ClinicType } from '../models/clinic.interface';
//import { ClinicListType } from '../models/clinicList.interface';

//import { ClinicAPI } from '../api/clinic_api';

// ClinicSearch should handle the request for data and then pass that to ClinicList. ClinicList currently has that functionality.
// Got useEffect code from https://reactjs.org/docs/faq-ajax.html because Axios wasn't working



/* 
You should return the promise instead.

getNameById (id) {
  return axios.get('/names/?ids=' + id)
      .then(response => {
        this.response = response.data
        return this.response[0].name
      })
  }

and use it:

getNameById(someId)
  .then(data => {
    // here you can access the data
  }); 
  */


const ClinicSearch: FC = () => {
    const searchTermEl = useRef("");

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
                            onClick={() => searchTermEl
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