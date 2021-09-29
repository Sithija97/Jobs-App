import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

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
        <Grid item xs={16}>
          <Container
            maxWidth="sm"
            className="Container-styles"
            style={{ backgroundColor: "#fff" }}
          >
            <div>
              <Typography variant="h6" component="h2">
                Ideal Body Weight
              </Typography>
              <br />
              <div>
                <form>
                  <div>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="units"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="metric"
                          checked={units === "metric"}
                          control={<Radio />}
                          label="Metric"
                          onChange={handleUnitsChange}
                        />
                        <FormControlLabel
                          value="imperial"
                          checked={units === "imperial"}
                          control={<Radio />}
                          label="Imperial"
                          onChange={handleUnitsChange}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="male"
                          checked={gender === "male"}
                          control={<Radio />}
                          label="Male"
                          onChange={handleGenderChange}
                        />
                        <FormControlLabel
                          value="female"
                          checked={gender === "female"}
                          control={<Radio />}
                          label="Female"
                          onChange={handleGenderChange}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div>
                    <TextField
                      size="small"
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper"
                      type="text"
                      value={height}
                      onChange={handleInputChange}
                      label={units === "metric" ? "height (m)" : "height (fts)"}
                    />
                  </div>
                  <div>
                    <ButtonGroup disableElevation variant="contained">
                      <Button type="submit" onClick={handleSubmit}>
                        Calculate
                      </Button>
                      <Button type="submit" onClick={handleReset}>
                        Reset
                      </Button>
                    </ButtonGroup>
                  </div>
                </form>
              </div>
              <div>
                {units === "metric" ? (
                  <p>{`Your ideal weight is : ${ibw} kg`}</p>
                ) : (
                  <p>{`Your ideal weight is : ${ibw} lbs`}</p>
                )}
              </div>
              <br />

              <Button
                size="small"
                variant="contained"
                startIcon={<ReplyIcon />}
                onClick={() => history.push("/")}
              >
                go back
              </Button>
            </div>
          </Container>
        </Grid>
        {/* <Grid item xs={8}>
          <Container
            maxWidth="sm"
            className="Container-styles"
            style={{ backgroundColor: "#fff" }}
          >
            <ContentAccordion />
          </Container>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

export default IdwCalculator;
