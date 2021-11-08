import { Grid } from "@mui/material";
import React from "react";
import Header from "./header";
import JobCard from "./jobCard";
import SearchBar from "./searchBar";

const Index = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          <JobCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Index;
