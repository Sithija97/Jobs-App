import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const BmiCalculator = () => {
  const initialstate = {
    h_value: "",
    w_value: "",
    h_units: "",
    w_units: "",
  };
  const [data, setData] = useState(initialstate);
  const { h_value, h_units, w_value, w_units } = data;
  const [bmi, setBmi] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    getBMI();
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData(initialstate);
    setBmi("");
    console.log(data);
  };

  const calculateBMI = (mass, height) => {
    return mass / height ** 2;
  };

  const getConvertedHeightValue = (height, value) => {
    switch (height) {
      case "cm":
        return parseFloat(value) / 100;
      case "inch":
        return parseFloat(value) * 0.0254;
      case "ft":
        return parseFloat(value) * 0.3048;
      default:
        return;
    }
  };

  const getConvertedMassValue = (mass, value) => {
    switch (mass) {
      case "g":
        return parseFloat(value) / 1000;
      default:
        return;
    }
  };
  const getBMI = () => {
    let mass = 0.0,
      height = 0.0,
      bmi = 0.0;

    if (w_units === "kg" && h_units !== "m") {
      mass = parseFloat(w_value);
      height = getConvertedHeightValue(h_units, h_value);
      bmi = calculateBMI(mass, height);
      setBmi(bmi.toFixed(2));
    } else if (w_units !== "kg" && h_units === "m") {
      mass = getConvertedMassValue(w_units, w_value);
      height = parseFloat(h_value);
      bmi = calculateBMI(mass, height);
      setBmi(bmi.toFixed(2));
    } else {
      mass = parseFloat(w_value);
      height = parseFloat(h_value);
      bmi = calculateBMI(mass, height);
      setBmi(bmi.toFixed(2));
    }
  };

  let history = useHistory();
  return (
    <div>
      <h5>Body mass Index</h5>
      <div>
        <form>
          <div>
            <input
              type="text"
              name="h_value"
              placeholder="height"
              value={data.h_value}
              onChange={handleInputChange}
            />

            <select
              type="text"
              id="height"
              name="h_units"
              value={data.h_units}
              onChange={handleInputChange}
            >
              <option value="" selected disabled hidden>
                Choose here
              </option>
              <option value="cm">cm</option>
              <option value="inch">inch</option>
              <option value="m">m</option>
              <option value="ft">ft</option>
            </select>
          </div>
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
              {/* <option value="g">grams</option> */}
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
        <h6>{`Your bmi value is : ${bmi}`}</h6>
      </div>
      <br />
      <button onClick={() => history.push("/")}>home</button>
    </div>
  );
};

export default BmiCalculator;
