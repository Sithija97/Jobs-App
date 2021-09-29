import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ContentAccordion from "./contentAccordion";

const IdwCalculator = () => {
  let history = useHistory();
  const [height, setHeight] = useState("");
  const [ibw, setIbw] = useState("");
  const [units, setUnits] = useState("metric");
  const [gender, setGender] = useState("male");

  const getMetricIBW = () => {
    let height_fts = parseFloat(height) * 3.28084;
    if (gender === "male") {
      let base_value = ~~(parseFloat(height_fts) / 5) * 106;
      let increment = parseInt(height_fts) % 5;
      let increment_value = increment * 6;
      console.log(base_value + increment_value);
      return base_value + increment_value;
    } else {
      let base_value = ~~(parseFloat(height_fts) / 5) * 105;
      let increment = parseInt(height_fts) % 5;
      let increment_value = increment * 5;
      console.log(base_value + increment_value);
      return base_value + increment_value;
    }
  };

  const getImprialIBW = () => {
    if (gender === "male") {
      let base_value = ~~(parseFloat(height) / 5) * 106;
      let increment = parseInt(height) % 5;
      let increment_value = increment * 6;
      console.log(base_value + increment_value);
      return base_value + increment_value;
    } else {
      let base_value = ~~(parseFloat(height) / 5) * 105;
      let increment = parseInt(height) % 5;
      let increment_value = increment * 5;
      console.log(base_value + increment_value);
      return base_value + increment_value;
    }
  };

  const getIBW = () => {
    let ibw = 0.0;
    units === "metric" ? (ibw = getMetricIBW()) : (ibw = getImprialIBW());
    units === "metric" ? setIbw(parseFloat(ibw / 2.2).toFixed(2)) : setIbw(ibw);
  };

  const handleInputChange = (e) => {
    setHeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getIBW();
  };

  const handleReset = (e) => {
    setHeight("");
    setUnits("metric");
    setGender("male");
    setIbw("");
    e.preventDefault();
  };

  const handleUnitsChange = (e) => {
    setUnits(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

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
              <h5>Ideal Weight</h5>
              <br />
              <div>
                <form>
                  <div>
                    units:
                    {/* {units} <br /> */}
                    <label> metric</label>
                    <input
                      type="radio"
                      value="metric"
                      checked={units === "metric"}
                      onChange={handleUnitsChange}
                    />
                    <label> imperial</label>
                    <input
                      type="radio"
                      value="imperial"
                      checked={units === "imperial"}
                      onChange={handleUnitsChange}
                    />
                  </div>
                  <div>
                    gender:
                    {/* {units} <br /> */}
                    <label> male</label>
                    <input
                      type="radio"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                    />
                    <label> female</label>
                    <input
                      type="radio"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={
                        units === "metric" ? "height (m)" : "height (fts)"
                      }
                      value={height}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <button type="submit" onClick={handleSubmit}>
                      calculate
                    </button>
                    <button type="submit" onClick={handleReset}>
                      reset
                    </button>
                  </div>
                </form>
              </div>
              <div>
                {units === "metric" ? (
                  <h6>{`Your ideal weight is : ${ibw} kg`}</h6>
                ) : (
                  <h6>{`Your ideal weight is : ${ibw} lbs`}</h6>
                )}
              </div>
              <br />
              <button onClick={() => history.push("/")}>home</button>
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

export default IdwCalculator;
