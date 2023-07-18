import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerModal = ({ isOneWay }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6"
        >
          <path
            d="M18 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h8V4a1 1 0 0 1 2 0v1zM5 10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="flex justify-between pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-slate-100 my-1 w-72">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="EEE, MMM d"
          className="w-28 bg-slate-100 border-r-2 border-gray-300 outline-none"
          placeholderText="Start date"
        />
        {!isOneWay && (
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="EEE, MMM d"
            className="w-28 bg-slate-100 pl-2 outline-none"
            placeholderText="End date"
            minDate={startDate}
          />
        )}
      </div>
    </div>
  );
};

export default DatePickerModal;
