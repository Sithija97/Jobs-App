import { Button, MenuItem, Select, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const SearchBar = (props) => {
  const initialState = {
    type: "Full time",
    location: "Remote",
  };
  const [loading, setLoading] = useState(false);
  const [jobsearch, setJobsearch] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobsearch({ ...jobsearch, [name]: value });
  };

  const search = async () => {
    setLoading(true);
    await props.fetchJobsCustom(jobsearch);
    setLoading(false);
  };

  return (
    <Box p={2} mt={-5} mb={2} className="wrapper">
      <Select
        name="type"
        value={jobsearch.type}
        className="wrapperInElements"
        variant="filled"
        disableunderline="true"
        onChange={handleInputChange}
      >
        <MenuItem value="Full time">Full time</MenuItem>
        <MenuItem value="Part time">Part time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select
        name="location"
        value={jobsearch.location}
        className="wrapperInElements"
        variant="filled"
        disableunderline="true"
        onChange={handleInputChange}
      >
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
      </Select>
      <Button
        className="wrapperInElements searchButton"
        disableunderline="true"
        disabled={loading}
        variant="contained"
        color="primary"
        onClick={search}
      >
        {loading ? <CircularProgress color="primary" size={22} /> : "Search"}
      </Button>
    </Box>
  );
};

export default SearchBar;
