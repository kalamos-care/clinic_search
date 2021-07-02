import React, { FC } from 'react'

import {
  BrowserRouter as Router,
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

interface Props {
  clinic_id: string,
  subtitle: string[],
  title: string,
};

const ClinicCard: FC<Props> = ({ title, subtitle, clinic_id }) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h3">
        {title}
      </Typography>
      {
        subtitle.map((st, i) =>
          <Typography key={i} variant="body2" component="p">
            {st}
          </Typography>
        )
      }
    </CardContent>
    <CardActions>
      <RouterLink to={`/clinic/${clinic_id}`}>
        <Button size="small" variant="contained">
          Select
        </Button>
      </RouterLink>
    </CardActions>
  </Card>
);

export default ClinicCard;