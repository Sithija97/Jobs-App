import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./header";
import JobCard from "./jobCard";
import NewJobModal from "./newJobModal";
import SearchBar from "./searchBar";
import JobData from "../Data.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";

const Index = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    const q = query(collection(db, "jobs"), orderBy("postedOn", "desc"));
    const data = await getDocs(q);
    data.forEach((doc) => {
      console.log(doc.data());
    });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <React.Fragment>
      <Header />
      {/* <NewJobModal /> */}
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <SearchBar />
          {JobData.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Index;
