import React, { FC, useEffect } from 'react'

import { Link as RouterLink } from 'react-router-dom';

import { Grid, List, ListItem, Divider, ListItemText, Typography, Link } from '@material-ui/core'

import { ClinicAPI } from '../api/clinic_api';
//import { ClinicType } from '../models/clinic.interface';
//import { fakeClinicData } from '../models/fakecliniclistdata';

//import ClinicCard from './ClinicCard';

interface Props {
    zip: string,
};

// ClinicList should receive JSON that resembles the ClinicList.interface Model and format that into a list of cards to be returned
// Replace ClinicCard with ListItems

const ClinicList: FC<Props> = ({ zip }) => {

    //const [ClinicListData, setClinicListData] = React.useState<ClinicType[]>();
    const [ClinicListData, setClinicListData] = React.useState<any>();
    useEffect(() => {
        if (zip != null) {
            ClinicAPI.getClinicsByZip(zip)
                .then(data => setClinicListData(data))
        }
        ClinicAPI.getBaseClinics().then(data => setClinicListData(data))
    }, []);

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
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

export default ClinicList;