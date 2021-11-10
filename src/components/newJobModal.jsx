// eslint-disable-next-line
import React, { useState } from "react";
import {
  Grid,
  Box,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Chip,
  Stack,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const NewJobModal = () => {
  const initialState = {
    title: "",
    type: "Full time",
    companyName: "",
    companyUrl: "",
    location: "Remote",
    link: "",
    description: "",
    skills: [],
  };
  const [jobDetails, setJobDetails] = useState(initialState);
  const skills = ["javascript", "react", "node", "firebase", "mongodb"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobDetails);
  };

  const handleSkills = (skill) =>
    jobDetails.skills.includes(skill)
      ? setJobDetails((jobDetails) => ({
          ...jobDetails,
          skills: jobDetails.skills.filter((s) => s !== skill),
        }))
      : // removing skill if exists
        setJobDetails((jobDetails) => ({
          ...jobDetails,
          skills: jobDetails.skills.concat(skill),
          // adding skill if doesn't exists
        }));

  return (
    <Dialog fullWidth open={true}>
      <DialogTitle>
        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          Post Job
          <IconButton>
            <CancelPresentationIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <FilledInput
              name="title"
              value={jobDetails.title}
              autoComplete="false"
              className="wrapperInElements"
              placeholder="Job Title"
              disableunderline="true"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              name="type"
              value={jobDetails.type}
              className="wrapperInElements"
              variant="filled"
              disableunderline="true"
              defaultValue="Full time"
              fullWidth
              onChange={handleInputChange}
            >
              <MenuItem value="Full time">Full time</MenuItem>
              <MenuItem value="Part time">Part time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="companyName"
              value={jobDetails.companyName}
              autoComplete="false"
              className="wrapperInElements"
              placeholder="Company Name"
              disableunderline="true"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="companyUrl"
              value={jobDetails.companyUrl}
              autoComplete="false"
              className="wrapperInElements"
              placeholder="Company URL "
              disableunderline="true"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              name="location"
              value={jobDetails.location}
              className="wrapperInElements"
              variant="filled"
              disableunderline="true"
              fullWidth
              onChange={handleInputChange}
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In-office">In-office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              name="link"
              value={jobDetails.link}
              autoComplete="false"
              className="wrapperInElements"
              placeholder="Job Link "
              disableunderline="true"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} ml={1}>
            <FilledInput
              name="description"
              value={jobDetails.description}
              autoComplete="false"
              placeholder="Job Description "
              disableunderline="true"
              fullWidth
              onChange={handleInputChange}
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography mb={2}>Skills</Typography>
          <Stack direction="row" spacing={1}>
            {skills.map((skill) => (
              <Chip
                variant="contained"
                color={
                  jobDetails.skills.includes(skill) ? "primary" : "default"
                }
                id={skill}
                label={skill}
                onClick={() => handleSkills(skill)}
              />
            ))}
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          color="red"
          alignItems="center"
          pl={2}
          pr={2}
          pb={2}
        >
          <Typography variant="caption">*Required fields</Typography>
          <Button
            variant="contained"
            disableunderline="true"
            onClick={handleSubmit}
          >
            Post job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModal;
