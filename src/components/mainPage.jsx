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
      <br />
      <button
        onClick={() => {
          history.push("/idw");
        }}
      >
        get your ideal weight
      </button>
      <br />
      <button
        onClick={() => {
          history.push("/test");
        }}
      >
        UI Test
      </button>
    </div>
  );
};

export default MainPage;
