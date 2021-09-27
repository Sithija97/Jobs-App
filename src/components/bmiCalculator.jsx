import React, { useState } from "react";

const BmiCalculator = () => {
  const initialstate = {
    h_value: "",
    w_value: "",
    h_units: "",
    w_units: "",
  };
  const [data, setData] = useState(initialstate);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData(initialstate);
    console.log(data);
  };
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
              <option value="pounds">pounds</option>
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
        <h6>Your bmi value is : </h6>
      </div>
    </div>
  );
};

export default BmiCalculator;
