import React, { useRef, useEffect, FC } from 'react'

import { Link as RouterLink } from 'react-router-dom';

import { Button, TextField, Grid, Typography, List, ListItem, ListItemText, Link, Divider } from '@material-ui/core'

//import ClinicList from './ClinicList';
import { ClinicAPI } from '../api/clinic_api';
i//mport { ClinicType } from '../models/clinic.interface';

// ClinicSearch should handle the request for data and then pass that to ClinicList. ClinicList currently has that functionality.
// Got useEffect code from https://reactjs.org/docs/faq-ajax.html because Axios wasn't working

const ClinicSearch: FC = () => {
    const searchTermEl = useRef<HTMLInputElement>(null);

    //const [ClinicListData, setClinicListData] = React.useState<ClinicType[]>();
    const [ClinicListData, setClinicListData] = React.useState<any>();
    useEffect(() => {
      if (searchTermEl.current != null) {
        ClinicAPI.getClinicsByZip(searchTermEl.current.value)
          .then(data => setClinicListData(data))
      }
      ClinicAPI.getBaseClinics().then(data => setClinicListData(data))
    }, []);
  

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
              placeholder="Enter Zip Code"
            />
            <Button
              variant="text"
              color="default"
              type="button"
              onClick={() => {
                if (searchTermEl.current != null)
                  ClinicAPI
                    .getClinicsByZip(searchTermEl.current.value)
                    .then(data => setClinicListData(data))
              }}
            >
              Submit
            </Button>
          </form>
        </Grid>
        {/* <ClinicList zip={searchTermEl.current.value} /> */}
        <Grid item xs={12}>
          {ClinicListData ?
            <List className="">
              {ClinicListData.data.map((clinic: any) =>
                <ListItem alignItems="flex-start" key={clinic.id}>
                  <Link component={RouterLink} to={`/clinic/${clinic.id}`}>
                    <ListItemText
                      primary={clinic.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className=""
                            color="textPrimary"
                          >
                            {`${clinic.location.city}, ${clinic.location.state} ${clinic.location.zipcode}`}
                          </Typography>
                          {[
                            clinic.email,
                          ]}
                        </React.Fragment>
                      }
                    />
                  </Link>
                  <Divider />
                </ListItem>
              )}
            </List>
            :
            <p>No data</p>
          }
        </Grid>
      </Grid>
    );
};

export default ClinicSearch;