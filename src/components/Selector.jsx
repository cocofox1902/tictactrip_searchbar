import React, { useState, useEffect } from "react";
import Option from "../components/Option";

const Selector = ({ setIsOneWay }) => {
  const [countMax, setCountMax] = useState(1);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("One-way");
  const [passengerCounts, setPassengerCounts] = useState({
    Adult: 1,
    Youth: 0,
    Senior: 0,
  });
  const [discount, setDiscount] = useState(false);

  const options = [
    {
      type: "Adult",
      years: "26+ years",
      count: passengerCounts.Adult,
      setCount: (count) =>
        setPassengerCounts({ ...passengerCounts, Adult: count }),
    },
    {
      type: "Youth",
      years: "0 - 25 years",
      count: passengerCounts.Youth,
      setCount: (count) =>
        setPassengerCounts({ ...passengerCounts, Youth: count }),
    },
    {
      type: "Senior",
      years: "58+ years",
      count: passengerCounts.Senior,
      setCount: (count) =>
        setPassengerCounts({ ...passengerCounts, Senior: count }),
    },
  ];

  useEffect(() => {
    const storedState = localStorage.getItem("homeState");
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      setCountMax(parsedState.countMax);
      setSelectedOption(parsedState.selectedOption);
      setPassengerCounts(parsedState.passengerCounts);
    }
  }, []);

  useEffect(() => {
    const stateToStore = {
      countMax,
      selectedOption,
      passengerCounts,
    };
    localStorage.setItem("homeState", JSON.stringify(stateToStore));
  }, [countMax, selectedOption, passengerCounts]);

  const updateCountMax = (newCount) => {
    setCountMax(newCount);
  };

  const handleClick = (index) => {
    if (index === "type") {
      setShow2(!show2);
      setShow(false);
    } else if (index === "number") {
      setShow((prevShow) => !prevShow);
      setShow2(false);
    }
  
    if (index === "type" && selectedOption === "Round trip") {
      setIsOneWay(false);
    } else if (index === "type" && selectedOption === "One-way") {
      setIsOneWay(true);
    }
  };
  

  const handlePassengerChange = (value, type) => {
    setPassengerCounts({ ...passengerCounts, [type]: value });
  };

  const handleFunction = () => {
    setDiscount(!discount);
  }

  return (
    <div className="flex">
      <div className="relative">
        <div className="flex items-center" onClick={() => handleClick("type")}>
          <p className="text-sm whitespace-nowrap font-semibold">
            {selectedOption}
          </p>
          <div
            className={`w-3 mx-2 ${show2 ? "selected" : ""}`}
            style={{ transition: "transform 0.3s" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 15">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13 10.2L3.4.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l11 11c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l11-11c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L13 10.2z"
              ></path>
            </svg>
          </div>
        </div>
        {show2 && (
          <div className="absolute mt-2 ml-2 bg-white shadow-md rounded-md w-36 z-10 p-5">
            <div>
              <label className="flex items-center pb-5">
                <input
                  type="radio"
                  name="option"
                  checked={selectedOption === "One-way"}
                  onChange={() => {
                    setSelectedOption("One-way");
                    setShow2(false);
                  }}
                  className="mr-2 hidden"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  size="18"
                  color="#5E90CC"
                  className={`w-5 ${
                    selectedOption === "One-way" ? "" : "hidden"
                  }`}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M21.602 4.3l.015.015c.403.403.41 1.054.016 1.465L9.053 18.91a1.047 1.047 0 0 1-1.512 0l-5.25-5.472a1.047 1.047 0 0 1 .016-1.465l.015-.015a1.02 1.02 0 0 1 1.46.019l4.136 4.36a.524.524 0 0 0 .76.001l11.46-12.021a1.022 1.022 0 0 1 1.464-.018z"
                  ></path>
                </svg>
                <p
                  className={`${
                    selectedOption === "One-way" ? "font-bold" : "pl-5"
                  }`}
                >
                  One-way
                </p>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  checked={selectedOption === "Round trip"}
                  onChange={() => {
                    setSelectedOption("Round trip");
                    setShow2(false);
                  }}
                  className="mr-2 hidden"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  size="18"
                  color="#5E90CC"
                  className={`w-5 ${
                    selectedOption === "Round trip" ? "" : "hidden"
                  }`}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M21.602 4.3l.015.015c.403.403.41 1.054.016 1.465L9.053 18.91a1.047 1.047 0 0 1-1.512 0l-5.25-5.472a1.047 1.047 0 0 1 .016-1.465l.015-.015a1.02 1.02 0 0 1 1.46.019l4.136 4.36a.524.524 0 0 0 .76.001l11.46-12.021a1.022 1.022 0 0 1 1.464-.018z"
                  ></path>
                </svg>
                <p
                  className={`${
                    selectedOption === "Round trip" ? "font-bold" : "pl-5"
                  }`}
                >
                  Round trip
                </p>
              </label>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <div
          className="flex items-center"
          onClick={() => handleClick("number")}
        >
          <p className="text-sm whitespace-nowrap font-semibold">
            {passengerCounts.Adult === 0 &&
            passengerCounts.Youth === 0 &&
            passengerCounts.Senior === 0
              ? "0 Adults"
              : passengerCounts.Adult === 1 &&
                passengerCounts.Youth === 0 &&
                passengerCounts.Senior === 0
              ? `${passengerCounts.Adult} Adult`
              : passengerCounts.Adult > 1 &&
                passengerCounts.Youth === 0 &&
                passengerCounts.Senior === 0
              ? `${passengerCounts.Adult} Adults`
              : passengerCounts.Adult === 0 &&
                passengerCounts.Youth <= 1 &&
                passengerCounts.Senior <= 1 &&
                passengerCounts.Youth + passengerCounts.Senior === 1
              ? `${passengerCounts.Youth + passengerCounts.Senior} Passenger`
              : `${
                  passengerCounts.Adult +
                  passengerCounts.Youth +
                  passengerCounts.Senior
                } Passengers`}
            , No discount card
          </p>
          <div
            className={`w-3 mx-2 ${show ? "selected" : ""}`}
            style={{ transition: "transform 0.3s" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 15">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13 10.2L3.4.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l11 11c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l11-11c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L13 10.2z"
              ></path>
            </svg>
          </div>
        </div>
        {show && (
          <div className="absolute mt-2 ml-2 bg-white shadow-md rounded-md z-10 p-5 max-h-[500px] overflow-auto">
            {options.map((option, index) => (
              <div key={index} className="py-2">
                <Option
                  type={option.type}
                  years={option.years}
                  countMax={countMax}
                  updateCountMax={updateCountMax}
                  passengerCount={option.count}
                  handlePassengerChange={option.setCount}
                  passengerType={option.type}
                  discount={discount}
                />
              </div>
            ))}
            <div className="flex justify-between pt-3">
              <div className="flex">
                <div className="w-6">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    size="24"
                    color="#425486"
                  >
                    <path
                      d="M15.375 15.375c2.025 0 3.825-.9 5.063-2.25H21v6.75C21 20.55 20.55 21 19.875 21H4.125C3.45 21 3 20.55 3 19.875v-6.75h7.313c1.237 1.35 3.037 2.25 5.062 2.25zm-6.75-6.75c0 .787.113 1.575.338 2.25H3v-2.25C3 7.95 3.45 7.5 4.125 7.5h4.613c-.113.338-.113.787-.113 1.125zm6.75 5.625c-3.037 0-5.625-2.475-5.625-5.625S12.225 3 15.375 3 21 5.475 21 8.625s-2.475 5.625-5.625 5.625zm1.913-8.662l-4.726 5.174.788.788 4.725-5.175-.787-.787zm.337 6.3a1.013 1.013 0 1 0 0-2.026 1.013 1.013 0 0 0 0 2.025zm-4.5-4.5a1.013 1.013 0 1 0 0-2.026 1.013 1.013 0 0 0 0 2.026z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-blue-900">Add discount card</p>
                <div className="w-6">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    size="20"
                    color="#425486"
                  >
                    <path
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 14a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zm0-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onClick={() => {handleFunction()}}/>
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"></div>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
