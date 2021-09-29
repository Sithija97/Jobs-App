import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ContentAccordion from "./contentAccordion";

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
                  <div>
                    units:
                    {/* {units} <br /> */}
                    <label> metric</label>
                    <input type="radio" value="metric" />
                    <label> imperial</label>
                    <input type="radio" value="imperial" />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="h_value"
                      placeholder="height (m)"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="weight (kg)"
                      name="w_value"
                    />
                  </div>

                  <div>
                    <button type="submit">calculate</button>
                    <button type="submit">reset</button>
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
