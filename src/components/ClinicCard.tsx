import React, { FC } from 'react'
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

interface Props {
  action: string,
  subtitle: string[],
  title: string,
};

const ClinicCard: FC<Props> = ({ title, subtitle, action }) => (
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
      <Button size="small" variant="contained">{action}</Button>
    </CardActions>
  </Card>
);

export default ClinicCard;