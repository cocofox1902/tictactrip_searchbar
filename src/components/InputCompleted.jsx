import React, { useState } from "react";
import axios from "axios";

const InputCompleted = ({ who, where }) => {
  const [searchValue, setSearchValue] = useState("");
  const [autocompleteResults, setAutocompleteResults] = useState([]);

  const handleInputChange = async (event) => {
    const { value } = event.target;
    setSearchValue(value);

    try {
      const response = await axios.get(
        `https://api.comparatrip.eu/cities/autocomplete/?q=${value}`
      );
      const results = response.data.map((result) => result.local_name);
      setAutocompleteResults(results);
    } catch (error) {
      console.log("Error fetching autocomplete results:", error);
    }
  };

  const handleAutocompleteSelect = (result) => {
    setSearchValue(result);
    setAutocompleteResults([]);
  };

  return (
    <div className="relative">
      {who === "From: " ? (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
        >
          <defs>
            <path
              d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              id="PinStart__a"
            ></path>
          </defs>
          <use
            xlinkHref="#PinStart__a"
            fill="currentColor"
            fillRule="evenodd"
          ></use>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
        >
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            fill="currentColor"
          />
        </svg>
      )}
      <input
        type="text"
        placeholder={`${who} City, Station or Airport`}
        value={searchValue}
        onChange={handleInputChange}
        className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 bg-slate-100 w-72 my-1"
      />
      {autocompleteResults.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full z-10">
          {autocompleteResults.map((result, index) => (
            <li
              key={index}
              className="py-1 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => handleAutocompleteSelect(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputCompleted;
