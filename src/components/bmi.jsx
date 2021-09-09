import React from "react";
import FormGroup from "./formGroup.jsx";

const BMI = () => {
  return (
    <React.Fragment>
      <div class="bg-gray-100 h-screen">
        <div className="flex flex-wrap overflow-hidden px-20 py-20">
          <div class="w-full overflow-hidden bg-white">
            <FormGroup />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BMI;
