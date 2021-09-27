import React from "react";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  let history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          history.push("/bmi");
        }}
      >
        get your bmi value
      </button>
      <br />
      <button
        onClick={() => {
          history.push("/wi");
        }}
      >
        know your water intake level
      </button>
    </div>
  );
};

export default MainPage;
