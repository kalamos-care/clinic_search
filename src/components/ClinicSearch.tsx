import React, { useContext, useRef, FC } from 'react'

import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import ClinicList from './ClinicList';
import SearchPanel from './SearchPanel';
import { stringify } from 'querystring';


interface Props {
    zip: string,
    loading: boolean,
};



const ClinicSearch: FC = () => {
    const searchTermEl = useRef("");

    return (
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
            <ClinicList zip={searchTermEl.current} />
        </SearchPanel>
    );
};

export default ClinicSearch;