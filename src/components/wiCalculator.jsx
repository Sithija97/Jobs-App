import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
  };

  return (
    <div>
      <h5>Water Intake</h5>
      <br />
      <div>
        <form>
          <div>
            <input
              type="text"
              placeholder="weight"
              name="w_value"
              value={data.w_value}
              onChange={handleInputChange}
            />
            <select
              type="text"
              id="weight"
              name="w_units"
              value={data.w_units}
              onChange={handleInputChange}
            >
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="kg">kg</option>
              <option value="lbs">pounds</option>
            </select>
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
        <h6>{`Your daily water intake is : ${wlevel}`}</h6>
      </div>
      <br />
      <button onClick={() => history.push("/")}>home</button>
    </div>
  );
};

export default WiCalculator;
