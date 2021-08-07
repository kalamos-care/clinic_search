import React, { FC, useContext, useEffect, useRef } from 'react';

/*
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
*/

// import { makeStyles } from '@material-ui/core/styles';

import { Container, Divider, Grid, Button, Typography, TextField, List, ListItem, ListItemText, Link } from '@material-ui/core/';

import Hero from '../components/Hero';
import { ClinicAPI } from '../api/clinic_api';
import { ClinicType } from '../models/clinic.interface';
import Clinic from './Clinic';

//import ClinicSearch from '../components/ClinicSearch';

// const useStyles = makeStyles((theme) => ({

// }));


export const Home: FC = () => {
  // const classes = useStyles();

  const searchTermEl = useRef("");

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
    ClinicAPI
      .getClinicsByZip(searchTermEl.current)
      .then(data => setClinicListData(data))
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
              onClick={() => setClinicListData(ClinicAPI.getClinicsByZip(searchTermEl.current))}
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
          {RandomClinicData ?
            <ul>
              {
                RandomClinicData.data.map((clinic: any) => {
                  <li>{clinic.title}</li>
                })
              }
            </ul>
            :
            <p>No data</p>
          }
        </div>
        <div>
          {ClinicListData ?
            <pre>{JSON.stringify(ClinicListData, null, 2)}</pre>
            :
            <p>No data</p>
          }
        </div>
      </Grid>
    </Container>
  );
};