import InputCompleted from "../components/InputCompleted";
import DatePickerModal from "../components/DatePickerModal";
import Selector from "../components/Selector";
import { useState } from "react";

function Home() {
  const [isOneWay, setIsOneWay] = useState(true);

  return (
    <div className="mx-5 px-5 pt-5 rounded-lg bg-white min-w-[19.7rem]">
      <div>
        <Selector setIsOneWay={setIsOneWay} />
      </div>
      <div className="pt-2 lg:flex">
        <div className="flex justify-between items-center">
          <InputCompleted who="From: " />
        </div>
        <div className="flex justify-between items-center">
          <InputCompleted who="To: " />
        </div>
        <div className="flex justify-between items-center">
          <DatePickerModal isOneWay={isOneWay} />
        </div>
      </div>
      <button className="mb-5 w-full flex text-center items-center cursor-pointer justify-center font-sans font-semibold overflow-hidden transition duration-200 bg-red-400 h-12 text-lg text-white rounded-lg">
        <div>Search</div>
      </button>
      <div>
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-400 mr-2"></div>
          Find my accommodation
        </label>
      </div>
    </div>
  );
}

export default Home;
