import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./header";
import JobCard from "./jobCard";
import NewJobModal from "./newJobModal";
import SearchBar from "./searchBar";
import JobData from "../Data.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import { Box } from "@mui/system";

const Index = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
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
    console.log(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <NewJobModal />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />

          {loading ? (
            <Box mt={8} display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            jobs.map((job) => <JobCard key={job.id} {...job} />)
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Index;
