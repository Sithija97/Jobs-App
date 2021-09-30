import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@mui/material/Container";
import {
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

const WiCalculator = () => {
  const initialstate = {
    w_value: "",
    w_units: "",
  };
  const [data, setData] = useState(initialstate);
  const [wlevel, setWlevel] = useState("");
  const { w_value, w_units } = data;
  let history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    getWaterIntake();
  };

  const handleReset = (e) => {
    setData(initialstate);
    e.preventDefault();
    setWlevel("");
  };

  const getMetric = (mass) => {
    return `${mass / 30} litres of water per day`;
  };

  const getImperial = (mass) => {
    return `${parseInt(parseInt(mass / 2) / 8)} glasses per day`;
  };

  const getWaterIntake = () => {
    let waterLevel = "";
    w_units === "kg"
      ? (waterLevel = getMetric(w_value))
      : (waterLevel = getImperial(w_value));
    setWlevel(waterLevel);
    toast.info(
      "Take 2 to 3 glasses of water additionally if you exercise or if your environmental conditions are hot."
    );
  };

  return (
    <React.Fragment>
      <ToastContainer theme="colored" />
      <Grid
        container
        spacing={1}
        columns={16}
        style={{ justifyContent: "center" }}
      >
        <Grid item xs={16}>
          <Container
            maxWidth="sm"
            className="Container-styles"
            style={{ backgroundColor: "#fff" }}
          >
            <div>
              <Typography variant="h6" component="h2">
                Water Intake
              </Typography>
              <br />
              <div>
                <form>
                  <div>
                    <TextField
                      size="small"
                      helperText=" "
                      id="demo-helper-text-aligned-no-helper"
                      type="text"
                      name="w_value"
                      value={data.w_value}
                      onChange={handleInputChange}
                      label="weight"
                    />
                    <FormControl sx={{ m: 0, minWidth: 120 }}>
                      <Select
                        type="text"
                        id="weight"
                        name="w_units"
                        size="small"
                        value={data.w_units}
                        onChange={handleInputChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="kg">kg</MenuItem>
                        <MenuItem value="lbs">pounds</MenuItem>
                      </Select>
                      {/* <FormHelperText>Without label</FormHelperText> */}
                    </FormControl>
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
                <p>{`Your daily water intake is : ${wlevel}`}</p>
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

export default WiCalculator;
