import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
    let temp_height = h_value * 12;
    return parseFloat(703 * (w_value / (temp_height * temp_height))).toFixed(2);
  };

  const getBMI = () => {
    let bmi = 0.0;
    units === "metric" ? (bmi = getMetricBMI()) : (bmi = getImprialBMI());
    setBmi(bmi);
  };

  let history = useHistory();
  return (
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
              placeholder={units === "metric" ? "height (m)" : "height (fts)"}
              value={data.h_value}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder={units === "metric" ? "weight (kg)" : "weight (lbs)"}
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
  );
};

export default BmiCalculator;
