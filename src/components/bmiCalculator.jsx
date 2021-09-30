import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const BmiCalculator = () => {
  const initialstate = {
    h_value: "",
    w_value: "",
  };
  const [data, setData] = useState(initialstate);
  const [units, setUnits] = useState("metric");
  const { h_value, w_value } = data;
  const [bmi, setBmi] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRadioChange = (e) => {
    setUnits(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    getBMI();
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData(initialstate);
    setUnits("metric");
    setBmi("");
    console.log(data);
  };

  const getMetricBMI = () => {
    return parseFloat(parseFloat(w_value) / parseFloat(h_value) ** 2).toFixed(
      2
    );
  };

  const getImprialBMI = () => {
    let inch_height = h_value * 12;
    return parseFloat(703 * (w_value / (inch_height * inch_height))).toFixed(2);
  };

  const getBMI = () => {
    let bmi = 0.0;
    units === "metric" ? (bmi = getMetricBMI()) : (bmi = getImprialBMI());
    setBmi(bmi);
    postNotifications(bmi);
  };

  const postNotifications = (bmi) => {
    let value = 0.0;
    value = parseFloat(bmi);
    if (value < 16) {
      toast.warning("you're extremely under weight");
    }
    if (value < 18.5 && value > 16) {
      toast.warning("you're under weight");
    }
    if (value < 25 && value > 18.6) {
      toast.success("you're normal weight");
    }
    if (value < 30 && value > 25.1) {
      toast.error("you're over weight");
    }
    if (value < 35 && value > 30.1) {
      toast.error("you're obese class one");
    }
    if (value < 40 && value > 35.1) {
      toast.error("you're obese class two");
    }
  };

  let history = useHistory();
  return (
    <React.Fragment>
      <ToastContainer theme="colored" />
      <Grid container spacing={1} columns={16}>
        <Grid item xs={16}>
          <Container
            maxWidth="sm"
            className="Container-styles"
            style={{ backgroundColor: "#fff" }}
          >
            <div>
              <Typography variant="h6" component="h2">
                Body Mass Index
              </Typography>
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
                          onChange={handleRadioChange}
                        />
                        <FormControlLabel
                          value="imperial"
                          checked={units === "imperial"}
                          control={<Radio />}
                          label="Imperial"
                          onChange={handleRadioChange}
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
                      name="h_value"
                      value={data.h_value}
                      onChange={handleInputChange}
                      label={units === "metric" ? "height (m)" : "height (fts)"}
                    />
                  </div>
                  <div>
                    <TextField
                      size="small"
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper"
                      type="text"
                      name="w_value"
                      value={data.w_value}
                      onChange={handleInputChange}
                      label={
                        units === "metric" ? "weight (kg)" : "weight (lbs)"
                      }
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
                <p>{`Your bmi value is : ${bmi}`}</p>
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

export default BmiCalculator;
