import React, { useContext, useState, useEffect, useRef, FC } from 'react'

import { Container, Grid, Divider, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

//import ClinicList from './ClinicList';
import SearchPanel from './SearchPanel';
import ClinicCard from './ClinicCard';
import Hero from './Hero';

//import { Clinic } from '../api/clinic_api';

// ClinicSearch should handle the request for data and then pass that to ClinicList. ClinicList currently has that functionality.
// Got useEffect code from https://reactjs.org/docs/faq-ajax.html because Axios wasn't working

const ClinicSearch: FC = () => {
    const searchTermEl = useRef("");
    const zip: string = "";
    //const loading = false;
    //const clinics: any = Clinic.getClinicsByZip(zip);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    {/* Note: the empty deps array [] means this useEffect will run once similar to componentDidMount() */ }

    useEffect(() => {
        fetch('https://npin.cdc.gov/api/organization/proximity?prox[origin]=' + zip, { mode: 'no-cors' } )
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <Container maxWidth="md">
          <Hero />
          <Divider />
        <SearchPanel title="Find a Clinic">
            <Grid>
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
            {/*
            <Grid
                container
                spacing={2}
                direction="column"
                justify="flex-start"
                alignItems="stretch"
            >

            {
                error ? (
                    <div>Error: {error.message}</div>
                ) :
                <ul>
                    {items.map(item => (
                        <li>
                            {item}
                        </li>
                    ))}
                </ul>
            }
            </Grid>
        */}
            {/* <ClinicList zip={searchTermEl.current} /> */}
        </SearchPanel>
        </Container>
    );
};

export default ClinicSearch;

            {/*if (error) {
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


            {/*{
                    clinics.length ? clinics.map((clinic: any) =>
                        <Grid
                            item
                            key={clinic.field_org_id}
                        >
                            <ClinicCard
                                title={clinic.title_field}
                                subtitle={[
                                    `${clinic.field_org_street1} ${clinic.field_org_street2} ${clinic.field_org_city_name}, ${clinic.field_org_state} ${clinic.field_org_zipcode}`,
                                    clinic.field_org_phone,
                                ]}
                                action="Select"
                            />
                        </Grid>
                    ) : <Grid item>{loading ? 'Loading' : 'No Results'}</Grid>
                }*/}