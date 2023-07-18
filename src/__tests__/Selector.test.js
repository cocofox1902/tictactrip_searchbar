import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Selector from "../components/Selector";
import "@testing-library/jest-dom/extend-expect";

describe("Selector component", () => {
  test("renders Selector component", () => {
    const { getByText } = render(<Selector />);
    expect(getByText(/One-way/i)).toBeInTheDocument();
    expect(getByText(/Round trip/i)).toBeInTheDocument();
  });  

  test("calls setIsOneWay function when radio button is clicked", () => {
    const setIsOneWay = jest.fn();

    const { getByText } = render(<Selector setIsOneWay={setIsOneWay} />);

    const oneWayRadioButton = getByText("One-way");
    const roundTripRadioButton = getByText("Round trip");

    fireEvent.click(oneWayRadioButton);

    expect(setIsOneWay).toHaveBeenCalledWith(true);

    fireEvent.click(roundTripRadioButton);

    expect(setIsOneWay).toHaveBeenCalledWith(false);
  });
});
