import React from "react";
import NewSelector from "../components/NewSelector";

function Option({
  type,
  years,
  countMax,
  updateCountMax,
  passengerCount,
  handlePassengerChange,
  passengerType,
  discount
}) {
  const countClick = (action) => () => {
    if (action === "more") {
      if (passengerCount < 9 && countMax < 9) {
        handlePassengerChange(passengerCount + 1);
        console.log(passengerCount);
        updateCountMax(countMax + 1);
      }
    } else if (action === "less") {
      if (passengerCount > 0) {
        handlePassengerChange(passengerCount - 1);
        updateCountMax(countMax - 1);
      }
    }
  };

  const isButtonDisabled = passengerCount === 9 || countMax === 8;

  return (
    <div className="w-64">
      <div className="flex border-b-2">
        <div className="pl-5">
          <div className="font-bold">{type}</div>
          <div className="text-gray-400">{years}</div>
        </div>
        <div className="flex items-center justify-around w-24 ml-auto">
          <button
            className={`w-8 ${
              passengerCount === 0 ? "text-gray-200" : "text-blue-400"
            }`}
            onClick={countClick("less")}
            role="button"
            data-testid="less-button"
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor">
                <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
                <path d="M9 15h14a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z"></path>
              </g>
            </svg>
          </button>
          <div>{passengerCount}</div>

          <button
            className={`w-8 ${
              countMax === 8 ? "text-gray-200" : "text-blue-400"
            }`}
            onClick={countClick("more")}
            disabled={isButtonDisabled}
            role="button"
            data-testid="more-button"
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor">
                <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
                <path d="M16 8a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6.001L17 23a1 1 0 0 1-2 0l-.001-6H9a1 1 0 0 1 0-2h6V9a1 1 0 0 1 1-1z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div>
        {Array.from({ length: passengerCount }, (_, index) => (
            <div key={index} >
              <NewSelector count={index + 1} type={type} discount={discount}/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Option;
