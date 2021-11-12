import { Button, CircularProgress, Grid } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Header from "./header";
import JobCard from "./jobCard";
import NewJobModal from "./newJobModal";
import SearchBar from "./searchBar";
import JobData from "../Data.js";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app, db } from "../firebase/config";
import { Box } from "@mui/system";
import JobViewModal from "./jobViewModal";

const Index = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobModal, setJobModal] = useState(false);
  const [customSearch, setCustomSearch] = useState(false);
  const [jobView, setJobView] = useState({});

  const fetchJobs = async () => {
    setLoading(true);
    setCustomSearch(false);
    const queryData = query(
      collection(db, "jobs"),
      orderBy("postedOn", "desc")
    );
    const response = await getDocs(queryData);
    const tempData = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      postedOn: doc.data().postedOn.toDate(),
    }));
    await setJobs(tempData);
    setLoading(false);
  };

  const postJob = async (jobDetails) => {
    await addDoc(collection(db, "jobs"), {
      ...jobDetails,
      postedOn: serverTimestamp(),
    });
    fetchJobs();
  };

  const fetchJobsCustom = async (jobsearch) => {
    setLoading(true);
    setCustomSearch(true);
    const queryData = query(
      collection(db, "jobs"),
      where("type", "==", jobsearch.type),
      where("location", "==", jobsearch.location),
      orderBy("postedOn", "desc")
    );
    const response = await getDocs(queryData);
    const tempData = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      postedOn: doc.data().postedOn.toDate(),
    }));
    await setJobs(tempData);
    setLoading(false);
  };

  const openJobDetails = (job) => {
    setJobView(job);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <React.Fragment>
      <Header setJobModal={() => setJobModal(true)} />
      <NewJobModal
        jobModal={jobModal}
        postJob={postJob}
        setJobModalClose={() => setJobModal(false)}
      />
      <JobViewModal job={jobView} closeModal={() => setJobView({})} />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar fetchJobsCustom={fetchJobsCustom} />

          {loading ? (
            <Box mt={8} display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <>
              {customSearch && (
                <Box my={2} display="flex" justifyContent="flex-end">
                  <Button variant="secondary" onClick={fetchJobs}>
                    <CloseOutlined size={20} /> Custom Search
                  </Button>
                </Box>
              )}
              {jobs.map((job) => (
                <JobCard
                  open={() => openJobDetails(job)}
                  key={job.id}
                  {...job}
                />
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Index;
