import React, { useContext, useRef, FC } from 'react'

import axios from 'axios';

import { Grid, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import ClinicCard from './ClinicCard';
import ClinicList from './ClinicList';
import SearchPanel from './SearchPanel';
import { stringify } from 'querystring';


interface Props {
    zip: string,
    loading: boolean,
};



const ClinicSearch: FC = () => {
    const searchTermEl = useRef(null);

    return (
        <SearchPanel title="Find a Clinic">
            <div>
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
                        onClick={() => searchTermEl.current.value
                        }
                    >
                        Submit
                    </Button>
                </form>
            </div>
            <ClinicList zip={searchTermEl} />
        </SearchPanel>
    );
};

export default ClinicSearch;