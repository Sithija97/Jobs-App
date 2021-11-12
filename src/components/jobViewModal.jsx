import React from "react";
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
  IconButton,
  CircularProgress,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { format } from "date-fns";

const JobViewModal = (props) => {
  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {props.job.title} @ {props.job.companyName}
          <IconButton onClick={props.closeModal}>
            <CloseOutlined />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Box mb={2} display="flex">
            <Typography fontSize={15} fontWeight="bold" variant="caption">
              Posted on:
            </Typography>
            <Typography fontSize={15} variant="caption">
              {props.job.postedOn &&
                format(props.job.postedOn, "dd/MMM/yyyy HH:MM")}
            </Typography>
          </Box>
          <Box mb={2} display="flex">
            <Typography fontSize={15} fontWeight="bold" variant="caption">
              Job type:
            </Typography>
            <Typography fontSize={15} variant="caption">
              {props.job.type}
            </Typography>
          </Box>
          <Box mb={2} display="flex">
            <Typography fontSize={15} fontWeight="bold" variant="caption">
              Job location:
            </Typography>
            <Typography fontSize={15} variant="caption">
              {props.job.location}
            </Typography>
          </Box>
          <Box mb={2} display="flex">
            <Typography fontSize={15} fontWeight="bold" variant="caption">
              Job description:
            </Typography>
            <Typography fontSize={15} variant="caption">
              {props.job.description}
            </Typography>
          </Box>
          <Box mb={2} display="flex">
            <Typography fontSize={15} fontWeight="bold" variant="caption">
              Company name :
            </Typography>
            <Typography fontSize={15} variant="caption">
              {props.job.companyNAme}
            </Typography>
          </Box>
          <Box mb={2} display="flex">
            <Typography fontSize={15} fontWeight="bold" variant="caption">
              Company Url :
            </Typography>
            <Typography fontSize={15} variant="caption">
              {props.job.companyUrl}
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography fontSize={15} fontWeight="bold" variant="caption">
              Skills:
            </Typography>
            <Grid container alignItems="center">
              {props.job.skills &&
                props.job.skills.map((skill) => (
                  <Stack id={skill} direction="row" spacing={1}>
                    <Chip label={skill} />
                  </Stack>
                ))}
            </Grid>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          component="a"
          href={props.job.link}
          target="_blank"
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default JobViewModal;
