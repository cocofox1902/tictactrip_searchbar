import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Option from "../components/Option";
import "@testing-library/jest-dom/extend-expect";

describe("Option component", () => {
  test("renders Option component", () => {
    const type = "Adult";
    const years = "18+";
    const countMax = 4;
    const passengerCount = 2;

    const { getByText } = render(
      <Option
        type={type}
        years={years}
        countMax={countMax}
        passengerCount={passengerCount}
      />
    );

    expect(getByText(type)).toBeInTheDocument();
    expect(getByText(years)).toBeInTheDocument();
    expect(getByText(passengerCount.toString())).toBeInTheDocument();
  });

  test('increases passenger count when "more" button is clicked', () => {
    const type = "Adult";
    const years = "18+";
    const countMax = 4;
    const passengerCount = 2;
    const updateCountMax = jest.fn();
    const handlePassengerChange = jest.fn();

    const { getByTestId } = render(
      <Option
        type={type}
        years={years}
        countMax={countMax}
        passengerCount={passengerCount}
        updateCountMax={updateCountMax}
        handlePassengerChange={handlePassengerChange}
      />
    );

    const moreButton = getByTestId("more-button");
    fireEvent.click(moreButton);

    expect(handlePassengerChange).toHaveBeenCalledWith(passengerCount + 1);
    expect(updateCountMax).toHaveBeenCalledWith(countMax + 1);
  });

  test('decreases passenger count when "less" button is clicked', () => {
    const type = "Adult";
    const years = "18+";
    const countMax = 4;
    const passengerCount = 2;
    const updateCountMax = jest.fn();
    const handlePassengerChange = jest.fn();

    const { getByTestId } = render(
      <Option
        type={type}
        years={years}
        countMax={countMax}
        passengerCount={passengerCount}
        updateCountMax={updateCountMax}
        handlePassengerChange={handlePassengerChange}
      />
    );

    const lessButton = getByTestId("less-button");
    fireEvent.click(lessButton);

    expect(handlePassengerChange).toHaveBeenCalledWith(passengerCount - 1);
    expect(updateCountMax).toHaveBeenCalledWith(countMax - 1);
  });
});
