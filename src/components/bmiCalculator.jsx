import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ContentAccordion from "./contentAccordion";

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
              <h5>Body mass Index</h5>
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
                      onChange={handleRadioChange}
                    />
                    <label> imperial</label>
                    <input
                      type="radio"
                      value="imperial"
                      checked={units === "imperial"}
                      onChange={handleRadioChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="h_value"
                      placeholder={
                        units === "metric" ? "height (m)" : "height (fts)"
                      }
                      value={data.h_value}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={
                        units === "metric" ? "weight (kg)" : "weight (lbs)"
                      }
                      name="w_value"
                      value={data.w_value}
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
                <h6>{`Your bmi value is : ${bmi}`}</h6>
              </div>
              <br />
              <button onClick={() => history.push("/")}>home</button>
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
