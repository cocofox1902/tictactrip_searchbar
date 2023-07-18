import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DatePickerModal from "../components/DatePickerModal";
import "@testing-library/jest-dom/extend-expect";

describe("DatePickerModal", () => {
  it("renders the start date input", () => {
    const { getByPlaceholderText } = render(
      <DatePickerModal isOneWay={true} />
    );
    const startDateInput = getByPlaceholderText("Start date");
    expect(startDateInput).toBeInTheDocument();
  });

  it("handles start date change correctly", () => {
    const { getByPlaceholderText } = render(
      <DatePickerModal isOneWay={true} />
    );
    const startDateInput = getByPlaceholderText("Start date");

    fireEvent.change(startDateInput, { target: { value: "2023-07-15" } });

    expect(startDateInput.value).toBe("Sat, Jul 15");
  });

  it("renders the end date input when isOneWay is false", () => {
    const { getByPlaceholderText } = render(
      <DatePickerModal isOneWay={false} />
    );
    const endDateInput = getByPlaceholderText("End date");
    expect(endDateInput).toBeInTheDocument();
  });

  it("handles end date change correctly", () => {
    const { getByPlaceholderText } = render(
      <DatePickerModal isOneWay={false} />
    );
    const endDateInput = getByPlaceholderText("End date");

    fireEvent.change(endDateInput, { target: { value: "2023-07-20" } });

    expect(endDateInput.value).toBe("Thu, Jul 20");
  });
});
