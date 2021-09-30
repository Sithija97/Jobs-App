import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  let history = useHistory();
  useEffect(() => {
    toast.info("Welcome to Health Calculator!");
  });
  return (
    <React.Fragment>
      <ToastContainer theme="colored" />

      <Grid
        style={{ padding: "30vh" }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={3}>
          <Container
            maxWidth="sm"
            className="Cube-styles"
            style={{ backgroundColor: "#fff" }}
          >
            0
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Container
            maxWidth="sm"
            className="Cube-styles"
            style={{ backgroundColor: "#fff" }}
          >
            1
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Container
            maxWidth="sm"
            className="Cube-styles"
            style={{ backgroundColor: "#fff" }}
          >
            2
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Container
            maxWidth="sm"
            className="Cube-styles"
            style={{ backgroundColor: "#fff" }}
          >
            3
          </Container>
        </Grid>
      </Grid>
      {/* <button
        onClick={() => {
          history.push("/bmi");
        }}
      >
        get your bmi value
      </button>
      <br />
      <button
        onClick={() => {
          history.push("/wi");
        }}
      >
        know your water intake level
      </button>
      <br />
      <button
        onClick={() => {
          history.push("/idw");
        }}
      >
        get your ideal weight
      </button>
      <br /> */}
    </React.Fragment>
  );
};

export default MainPage;
