import React, { useState } from "react";

const NewSelector = ({ count, type, discount }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  const options = Array.from({ length: 26 }, (_, index) => {
    const age = index + 1;
    return (
      <option key={age} value={age}>
        {age} years
      </option>
    );
  });

  const handleCloseModal = (type) => {
    if (type === "close") {
      setShowModal(false);
    } else if (type === "clear") {
      setSelectedCards([]);
      setShowModal(false);
    } else if (type === "register") {
      // Save the selected cards information to an array or perform any other actions
      console.log(selectedCards);
      setShowModal(false);
    }
  };

  const handleCardSelection = (card) => {
    const index = selectedCards.indexOf(card);
    if (index > -1) {
      setSelectedCards((prevSelectedCards) =>
        prevSelectedCards.filter((c) => c !== card)
      );
    } else {
      setSelectedCards((prevSelectedCards) => [...prevSelectedCards, card]);
    }
  };

  return (
    <div>
      {type !== "Adult" && (
        <div className="flex justify-between pt-3 pb-4 pl-10">
          <div>
            {type} {count}
          </div>
          <select
            className="bg-blue-200 border border-transparent text-blue-900 text-sm rounded-lg px-4 outline-none appearance-none transition-opacity cursor-pointer"
            id={`${type.toLowerCase()}-${count}-age`}
            name={`${type.toLowerCase()}-${count}-age`}
            aria-label={`${type} ${count} Age`}
          >
            <option value="">Age</option>
            {options}
          </select>
          {discount === true && (
            <button
              className="w-14 bg-blue-200 px-5 rounded-xl hover:bg-blue-300"
              onClick={() => setShowModal(true)}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.375 15.375c2.025 0 3.825-.9 5.063-2.25H21v6.75C21 20.55 20.55 21 19.875 21H4.125C3.45 21 3 20.55 3 19.875v-6.75h7.313c1.237 1.35 3.037 2.25 5.062 2.25zm-6.75-6.75c0 .787.113 1.575.338 2.25H3v-2.25C3 7.95 3.45 7.5 4.125 7.5h4.613c-.113.338-.113.787-.113 1.125zm6.75 5.625c-3.037 0-5.625-2.475-5.625-5.625S12.225 3 15.375 3 21 5.475 21 8.625s-2.475 5.625-5.625 5.625zm1.913-8.662l-4.726 5.174.788.788 4.725-5.175-.787-.787zm.337 6.3a1.013 1.013 0 1 0 0-2.026 1.013 1.013 0 0 0 0 2.025zm-4.5-4.5a1.013 1.013 0 1 0 0-2.026 1.013 1.013 0 0 0 0 2.026z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>
      )}
      {type === "Adult" && discount === true && (
        <div className="flex justify-between pt-3 pb-4 pl-10">
          <div>
            {type} {count}
          </div>
          <button
            className="w-14 bg-blue-200 px-5 rounded-xl hover:bg-blue-300"
            onClick={() => setShowModal(true)}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.375 15.375c2.025 0 3.825-.9 5.063-2.25H21v6.75C21 20.55 20.55 21 19.875 21H4.125C3.45 21 3 20.55 3 19.875v-6.75h7.313c1.237 1.35 3.037 2.25 5.062 2.25zm-6.75-6.75c0 .787.113 1.575.338 2.25H3v-2.25C3 7.95 3.45 7.5 4.125 7.5h4.613c-.113.338-.113.787-.113 1.125zm6.75 5.625c-3.037 0-5.625-2.475-5.625-5.625S12.225 3 15.375 3 21 5.475 21 8.625s-2.475 5.625-5.625 5.625zm1.913-8.662l-4.726 5.174.788.788 4.725-5.175-.787-.787zm.337 6.3a1.013 1.013 0 1 0 0-2.026 1.013 1.013 0 0 0 0 2.025zm-4.5-4.5a1.013 1.013 0 1 0 0-2.026 1.013 1.013 0 0 0 0 2.026z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      {showModal === true && (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-white w-screen h-screen">
          <div className="p-6 border-b-2 flex justify-between">
            <h2>Discount Cards</h2>
            <button
              onClick={() => {
                handleCloseModal("close");
              }}
            >
              X
            </button>
          </div>
          <div>
            <div className="flex justify-between bg-slate-200 p-5">
              <div className="flex text-slate-400 items-center">
                <p>WESTBAHN</p>
                <div className="w-5">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pl-1"
                  >
                    <path
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zm0-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <img
                src="https://cdn-goeuro.com/static_content/web/logos/31/westbahn.png"
                height="16"
                alt="westbahn"
                className="w-25 h-4"
              ></img>
            </div>
            <div className="flex justify-between p-3">
              <p>ÖBB Vorteilscard</p>
              <input
                className="w-5 h-5"
                type="radio"
                id="2076"
                value=""
                onChange={() => handleCardSelection("ÖBB Vorteilscard")}
              ></input>
            </div>
          </div>
          <div>
            <div className="flex justify-between bg-slate-200 p-5">
              <div className="flex text-slate-400 items-center">
                <p>Renfe</p>
                <div className="w-5">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pl-1"
                  >
                    <path
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zm0-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <img
                src="https://cdn-goeuro.com/static_content/web/logos/31/renfeConnect.png"
                height="16"
                alt="renfeConnect"
                className="h-5"
              />
            </div>
            <div className="flex justify-between p-3">
              <p>Tarjeta + Renfe Joven: 14 - 25 years old</p>
              <input
                className="w-5 h-5"
                type="radio"
                id="2076"
                value=""
                onChange={() => handleCardSelection("Tarjeta + Renfe Joven: 14 - 25 years old")}
              ></input>
            </div>
            <div className="flex justify-between p-3">
              <p>Tarjeta Dorada: Over 60 years old</p>
              <input
                className="w-5 h-5"
                type="radio"
                id="2076"
                value=""
                onChange={() => handleCardSelection("Tarjeta Dorada: Over 60 years old")}
              ></input>
            </div>
          </div>
          <div>
            <div className="flex justify-between bg-slate-200 p-5">
              <div className="flex text-slate-400 items-center">
                <p>sncfConnect</p>
                <div className="w-5">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pl-1"
                  >
                    <path
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zm0-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <img
                src="https://cdn-goeuro.com/static_content/web/logos/31/sncf.png"
                height="16"
                alt="sncfConnect"
                className="h-5"
              />
            </div>
            <div className="flex justify-between p-3">
              <p>Carte Avantage Adulte</p>
              <input
                type="checkbox"
                id="discountCardCheckbox"
                name="discountCardCheckbox"
                className="sc-1sn3ny5-2 bUZmap"
                onChange={() => handleCardSelection("Carte Avantage Adulte")}
              />
            </div>
            <div className="flex justify-between p-3">
              <p>Carte Avantage Jeune</p>
              <input
                type="checkbox"
                id="discountCardCheckbox"
                name="discountCardCheckbox"
                className="sc-1sn3ny5-2 bUZmap"
                onChange={() => handleCardSelection("Carte Avantage Jeune")}
              />
            </div>
            <div className="flex justify-between p-3">
              <p>Carte Liberté</p>
              <input
                type="checkbox"
                id="discountCardCheckbox"
                name="discountCardCheckbox"
                className="sc-1sn3ny5-2 bUZmap"
                onChange={() => handleCardSelection("Carte Liberté")}
              />
            </div>
            <div className="flex justify-between p-3">
              <p>Carte Avantage Senior</p>
              <input
                type="checkbox"
                id="discountCardCheckbox"
                name="discountCardCheckbox"
                className="sc-1sn3ny5-2 bUZmap"
                onChange={() => handleCardSelection("Carte Avantage Senior")}
              />
            </div>
            <div className="flex justify-between p-3">
              <p>Carte Avantage Week-end</p>
              <input
                type="checkbox"
                id="discountCardCheckbox"
                name="discountCardCheckbox"
                className="sc-1sn3ny5-2 bUZmap"
                onChange={() => handleCardSelection("Carte Avantage Week-end")}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between bg-slate-200 p-5">
              <div className="flex text-slate-400 items-center">
                <p>EUROSTAR</p>
                <div className="w-5">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pl-1"
                  >
                    <path
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a1 1 0 0 1-1-1v-7a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1zm0-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <img
                src="https://cdn-goeuro.com/static_content/web/logos/31/westbahn.png"
                height="16"
                alt="westbahn"
                className="w-25 h-4"
              ></img>
            </div>
            <div className="flex justify-between p-3">
              <p>Club Eurostar</p>
              <input
                className="w-5 h-5"
                type="radio"
                id="2076"
                value=""
                onChange={() => handleCardSelection("Club Eurostar")}
              ></input>
            </div>
          </div>
          <div className="bottom-0">
            <button
              onClick={() => {
                handleCloseModal("clear");
              }}
            >
              Clear
            </button>
            <button
              onClick={() => {
                handleCloseModal("register");
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewSelector;
