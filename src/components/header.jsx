import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <Box py={10} className="headerBox" color="white">
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4">Open Job Listing</Typography>
            <Button variant="contained">Post a Job</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
