import React, { useRef, useEffect, FC } from 'react'

import { Link as RouterLink } from 'react-router-dom';

import { Button, TextField, Grid, Typography, List, ListItem, ListItemText, Link, Divider } from '@material-ui/core'

//import ClinicList from './ClinicList';
import { ClinicAPI } from '../api/clinic_api';
//import { ClinicType } from '../models/clinic.interface';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  clinicsList: {

  },
}));

// ClinicSearch should handle the request for data and then pass that to ClinicList. ClinicList currently has that functionality.

const ClinicSearch: FC = () => {
  const classes = useStyles();

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
        <Typography variant="h4" component="h2" gutterBottom>
          Find a Clinic
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our clinic database is built on the incredible work of the CDC and their NPIN project.
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
            Search
          </Button>
        </form>
      </Grid>
      {/* <ClinicList zip={searchTermEl.current.value} /> */}
      <Grid item xs={12}>
        {ClinicListData ?
          <List className="clinicsList">
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
                      </React.Fragment>
                    }
                  />
                </Link>
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