import React from "react";
import { differenceInMinutes } from "date-fns";
import { Button, Chip, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const JobCard = (props) => {
  return (
    <Box p={2} className="jobCardWrapper">
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography>{props.title}</Typography>
        </Grid>
        <Grid item xs>
          <Chip label={props.companyName} />
        </Grid>
        <Grid item container xs>
          {props.skills.map((skill) => (
            <Stack direction="row" spacing={1}>
              <Chip id={skill} label={skill} />
            </Stack>
          ))}
        </Grid>
        <Grid item xs>
          <Typography>
            {differenceInMinutes(Date.now(), props.postedOn)} min ago |{" "}
            {props.type} | {props.location}
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid item ml={10}>
            <Button variant="contained" className="MuiButton">
              Check
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobCard;
