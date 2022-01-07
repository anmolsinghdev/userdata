import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const UserCard = ({ id, title, body }) => {
  return (
    <Grid item lg={4}>
      <Card
        sx={{
          width: '300px',
          height: '100%',
          border: '1px solid #cccc',
          margin: '1rem',
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {id}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {body}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default UserCard;
