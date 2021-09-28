import React from "react";
import { useHistory } from "react-router-dom";
const IdwCalculator = () => {
  let history = useHistory();
  return (
    <div>
      <h5>Ideal Weight</h5>
      <br />
      <div>
        <form>
          <div>
            <input type="text" />
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
