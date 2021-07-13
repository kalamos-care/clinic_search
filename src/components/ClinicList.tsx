import React, { FC, useEffect } from 'react'
import {
    Link as RouterLink,
} from 'react-router-dom';

import { Grid, List, ListItem, Divider, ListItemText, Typography, Link } from '@material-ui/core'

import { ClinicAPI } from '../api/clinic_api';
//import { ClinicType } from '../models/clinic.interface';
import { ClinicListType } from '../models/clinicList.interface';
//import { fakeClinicData } from '../models/fakecliniclistdata';

//import ClinicCard from './ClinicCard';

interface Props {
    zip: string,
};

// ClinicList should receive JSON that resembles the ClinicList.interface Model and format that into a list of cards to be returned
// Replace ClinicCard with ListItems

const ClinicList: FC<Props> = ({ zip }) => {
    //const loading = false;

    // type ClinicListObj = {
    //     field1: ClinicType;
    //     field2: ClinicType;
    // };
    const [ClinicListData, setClinicListData] = React.useState<ClinicListType>();
    useEffect(() => {
        ClinicAPI
            .getClinicsByZip(zip)
            .then(data => setClinicListData(data))
    }, []);

    console.log(ClinicListData);

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <pre>{JSON.stringify(ClinicListData, null, 2)}</pre>
            <pre>{zip}</pre>

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
        </Grid>
    );
};

export default ClinicList;