import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  let history = useHistory();
  useEffect(() => {
    toast.info("Welcome to Health Calculator!");
  });
  return (
    <div>
      <ToastContainer theme="colored" />
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
