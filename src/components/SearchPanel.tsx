
import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Button from '../components/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    // item: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   padding: theme.spacing(0, 5),
    // },
    title: {
        marginBottom: theme.spacing(14),
    },
    // number: {
    //   fontSize: 24,
    //   fontFamily: theme.typography.fontFamily,
    //   color: theme.palette.secondary.main,
    //   fontWeight: theme.typography.fontWeightMedium,
    // },
    // image: {
    //   height: 55,
    //   marginTop: theme.spacing(4),
    //   marginBottom: theme.spacing(4),
    // },
    // button: {
    //   marginTop: theme.spacing(8),
    // },
}));

interface Props {
    title: string,
    children: any,
};

const SearchPanel: FC<Props> = ({ title, children }) => (
        <Container>
            <Typography variant="h4" component="h2">
                {title}
            </Typography>
            <div>
                {children}
            </div>
        </Container>
);

export default SearchPanel;