import React from "react";

const Input = ({ inputTitle, heightParams, weightParams }) => {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        {inputTitle}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <select
            id="currency"
            name="currency"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full  py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            {inputTitle === "height"
              ? heightParams.map((val) => <option>{val}</option>)
              : weightParams.map((val) => <option>{val}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;
