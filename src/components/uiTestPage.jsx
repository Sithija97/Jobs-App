import React from "react";
import Container from "@mui/material/Container";
import { FilledInput, Grid } from "@mui/material";
import ContentAccordion from "./contentAccordion";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
const UiTestPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={1} columns={16}>
        <Grid item xs={8}>
          <Container
            maxWidth="sm"
            className="Container-styles"
            style={{ backgroundColor: "#fff" }}
          >
            <div>
              <h5>Body mass Index</h5>
              <div>
                <form>
                  {/* <div>
                    units:
                    
                    <label> metric</label>
                    <input type="radio" value="metric" />
                    <label> imperial</label>
                    <input type="radio" value="imperial" />
                  </div> */}
                  {/* added */}
                  <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                  {/* added */}
                  <div>
                    {/* <input
                      type="text"
                      name="h_value"
                      placeholder="height (m)"
                    /> */}
                    <FormControl variant="filled">
                      <InputLabel size="small" htmlFor="component-filled">
                        Name
                      </InputLabel>
                      <FilledInput size="small" id="component-filled" />
                    </FormControl>
                  </div>{" "}
                  {/* <br /> */}
                  <div>
                    {/* <input
                      type="text"
                      placeholder="weight (kg)"
                      name="w_value"
                    /> */}
                    <FormControl variant="filled">
                      <InputLabel size="small" htmlFor="component-filled">
                        Name
                      </InputLabel>
                      <FilledInput size="small" id="component-filled" />
                    </FormControl>
                  </div>
                  {/* <br /> */}
                  <div>
                    {/* <button type="submit">calculate</button>
                    <button type="submit">reset</button> */}
                    <Button variant="contained" size="small">
                      Calculate
                    </Button>
                    <Button variant="contained" size="small">
                      Reset
                    </Button>
                  </div>
                </form>
              </div>
              <div>
                <h6>{`Your bmi value is : `}</h6>
              </div>

              <button>home</button>
            </div>
          </Container>
        </Grid>
        <Grid item xs={8}>
          <Container
            maxWidth="sm"
            className="Container-styles"
            style={{ backgroundColor: "#fff" }}
          >
            <ContentAccordion />
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default UiTestPage;
