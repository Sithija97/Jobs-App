import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const JobCard = () => {
  return (
    <Box p={2} className="jobCardWrapper">
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography>Frontend Developer</Typography>
        </Grid>
        <Grid item xs>
          <Typography>Google</Typography>
        </Grid>
        <Grid item container xs>
          <Grid item>React.js</Grid>
          <Grid item>Node.js</Grid>
          <Grid item>MongoDB</Grid>
        </Grid>
        <Grid item xs>
          <Typography>20 min ago | Full time | Remote</Typography>
        </Grid>
        <Grid item xs>
          <Button variant="contained">Check</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCard;
