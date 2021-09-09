import React from "react";
import Input from "./input";

const FormGroup = ({ requiredParams }) => {
  const heightParams = ["meters", "inches", "feets"];
  const weightParams = ["kilograms", "pounds"];
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Body Mass Index</div>
        {/* here */}
        {requiredParams.height && (
          <Input inputTitle="height" heightParams={heightParams} />
        )}
        {requiredParams.weight && (
          <Input inputTitle="weight" weightParams={weightParams} />
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          type="submit"
          className="inline-flex rounded-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
        >
          Calculate
        </button>
        <button
          type="submit"
          className="inline-flex rounded-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FormGroup;
