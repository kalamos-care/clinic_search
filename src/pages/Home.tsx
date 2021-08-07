import React, { FC, useEffect, useRef } from 'react';

// import {
//   Link as RouterLink,
//   LinkProps as RouterLinkProps,
// } from 'react-router-dom';

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
  const searchTermEl = useRef("");

  const [RandomClinicData, setRandomClinicListData] = React.useState<ClinicType[]>();
  useEffect(() => {
    ClinicAPI
      .getRandomClinics()
      .then(data => setRandomClinicListData(data))
  }, []);
  console.log(RandomClinicData);

  const [btHomeClinics, setbtClinicListData] = React.useState<ClinicType[]>();
  useEffect(() => {
    ClinicAPI
      .getClinicsByZip("11211")
      .then(data => setbtClinicListData(data))
  }, []);
  console.log(btHomeClinics);

  

  const [ClinicListData, setClinicListData] = React.useState<ClinicType[]>();
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
              placeholder="Enter Location"
            />
            <Button
              variant="text"
              color="default"
              type="button"
              onClick={() => searchTermEl.current}
            >
              Submit
            </Button>
          </form>
        </Grid>
        {/*
            <List className="">
                {ClinicListData?.data.map((clinic: any) =>
                    <ListItem alignItems="flex-start" key={clinic.field_org_id}>
                        <Link component={RouterLink} to={`/clinic/${clinic.field_org_id}`}>
                            <ListItemText
                                primary={clinic.title_field}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className=""
                                            color="textPrimary"
                                        >
                                            {clinic.title_field}
                                        </Typography>
                                        {[
                                            `${clinic.field_org_street1} ${clinic.field_org_street2} ${clinic.field_org_city_name}, ${clinic.field_org_state} ${clinic.field_org_zipcode}`,
                                            clinic.field_org_phone,
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
        <pre>{JSON.stringify(RandomClinicData, null, 2)}</pre>
        <div>
            
        </div>
      </Grid>
    </Container>
  );
};