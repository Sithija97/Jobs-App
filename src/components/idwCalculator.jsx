import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const IdwCalculator = () => {
  let history = useHistory();
  const [height, setHeight] = useState("");
  const [units, setUnits] = useState("metric");
  const [gender, setGender] = useState("male");

  const getMetricIBW = () => {};

  const getImprialIBW = () => {
    if (gender === "male") {
      let base_value = ~~(parseFloat(height) / 5) * 106;
      let increment = parseFloat(height) % 5;
      let increment_value = increment * 6;
      return base_value + increment_value;
    } else {
      let base_value = ~~(parseFloat(height) / 5) * 105;
      let increment = parseFloat(height) % 5;
      let increment_value = increment * 5;
      return base_value + increment_value;
    }
  };

  const getIBW = () => {
    let ibw = 0.0;
    units === "metric" ? (ibw = getMetricIBW()) : (ibw = getImprialIBW());
    console.log(ibw);
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
    e.preventDefault();
  };

  const handleUnitsChange = (e) => {
    setUnits(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
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
              placeholder={units === "metric" ? "height (m)" : "height (fts)"}
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
        <h6>{`Your ideal weight is : `}</h6>
      </div>
      <br />
      <button onClick={() => history.push("/")}>home</button>
    </div>
  );
};

export default IdwCalculator;
