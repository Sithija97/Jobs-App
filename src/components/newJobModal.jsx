// eslint-disable-next-line
import React from "react";
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
  const skills = ["javascript", "react", "node", "firebase", "mongodb"];
  return (
    <Dialog fullWidth open={false}>
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
              className="wrapperInElements"
              placeholder="Job Title"
              disableunderline="true"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              className="wrapperInElements"
              variant="filled"
              disableunderline="true"
              defaultValue="Full time"
              fullWidth
            >
              <MenuItem value="Full time">Full time</MenuItem>
              <MenuItem value="Part time">Part time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              className="wrapperInElements"
              placeholder="Company Name"
              disableunderline="true"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              className="wrapperInElements"
              placeholder="Company URL "
              disableunderline="true"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              className="wrapperInElements"
              variant="filled"
              disableunderline="true"
              defaultValue="Remote"
              fullWidth
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In-office">In-office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              className="wrapperInElements"
              placeholder="Job Link "
              disableunderline="true"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} ml={1}>
            <FilledInput
              placeholder="Job Description "
              disableunderline="true"
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography mb={2}>Skills</Typography>
          <Stack direction="row" spacing={1}>
            {skills.map((skill) => (
              <Chip id={skill} label={skill} />
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
          <Button variant="contained" disableunderline="true">
            Post job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModal;
