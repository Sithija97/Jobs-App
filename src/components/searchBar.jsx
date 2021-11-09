import { Button, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SearchBar = () => {
  return (
    <Box p={2} mt={-5} mb={2} className="wrapper">
      <Select
        className="wrapperInElements"
        variant="filled"
        disableunderline="true"
        defaultValue="Full time"
      >
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select
        className="wrapperInElements"
        variant="filled"
        disableunderline="true"
        defaultValue="Remote"
      >
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
      </Select>
      <Button
        className="wrapperInElements searchButton"
        disableunderline="true"
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
