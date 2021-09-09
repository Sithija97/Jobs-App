import React from "react";
import Card from "./card.jsx";

const Home = ({ history }) => {
  return (
    <div className="pl-5">
      <h2>under dev</h2>
      <button
        type="submit"
        onClick={() => history.push("/bmi")}
        className="inline-flex rounded-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        bmi
      </button>

      <button
        onClick={() => history.push("/wi")}
        type="submit"
        className="inline-flex rounded-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        wi
      </button>
    </div>
  );
};

export default Home;
