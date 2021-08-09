import React, { FC, useContext, useEffect, useRef } from 'react';

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';

import { Container, Divider, Grid, Button, Typography, TextField, List, ListItem, ListItemText, Link } from '@material-ui/core/';

import Hero from '../components/Hero';
import { ClinicAPI } from '../api/clinic_api';
import { ClinicType } from '../models/clinic.interface';

//import ClinicSearch from '../components/ClinicSearch';

// const useStyles = makeStyles((theme) => ({

// }));


export const Home: FC = () => {
  // const classes = useStyles();

  const searchTermEl = useRef<HTMLInputElement>(null);

  const [RandomClinicData, setRandomClinicListData] = React.useState<any>();
  useEffect(() => {
    ClinicAPI
      .getRandomClinics()
      .then(data => setRandomClinicListData(data))
  }, []);
  console.log(RandomClinicData);

  /*
  const [btHomeClinics, setbtClinicListData] = React.useState<ClinicType[]>();
  useEffect(() => {
    ClinicAPI
      .getClinicsByZip("11211")
      .then(data => setbtClinicListData(data))
  }, []);
  console.log(btHomeClinics); */

  //const [ClinicListData, setClinicListData] = React.useState<ClinicType[]>();
  const [ClinicListData, setClinicListData] = React.useState<any>();
  useEffect(() => {
    if (searchTermEl.current != null) {
      ClinicAPI.getClinicsByZip(searchTermEl.current.value)
        .then(data => setClinicListData(data))
    }
    ClinicAPI.getRandomClinics().then(data => setClinicListData(data))
  }, []);
  console.log(ClinicListData);


  return (
    <Container maxWidth="md">
      <Hero />
      <Divider />
      {/*<ClinicSearch />*/}
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
                if(searchTermEl.current != null)
                  ClinicAPI
                    .getClinicsByZip(searchTermEl.current.value)
                    .then(data => setClinicListData(data))
                }}
            >
              Submit
            </Button>
          </form>
        </Grid>
        {/*
        <List className="">
          {RandomClinicData?.data.map((clinic: any) =>
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
                        {clinic.title}
                      </Typography>
                      {[
                        `${clinic.location.city}, ${clinic.location.state} ${clinic.location.zipcode}`,
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
        */}
        <div>
          {ClinicListData ?
            <List className="">
              {ClinicListData.data.map((clinic:any) =>
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
                          {clinic.title}
                        </Typography>
                        {[
                          `${clinic.location.city}, ${clinic.location.state} ${clinic.location.zipcode}`,
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
          {/*<pre>{JSON.stringify(ClinicListData, null, 2)}</pre>*/}
        </div>
      </Grid>
    </Container>
  );
};