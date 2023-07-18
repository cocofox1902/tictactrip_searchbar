import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputCompleted from "../components/InputCompleted";
import "@testing-library/jest-dom/extend-expect";

describe("InputCompleted", () => {
  it("renders the input component", () => {
    const { getByPlaceholderText } = render(<InputCompleted who="From: " />);
    const inputElement = getByPlaceholderText("From: City, Station or Airport");
    expect(inputElement).toBeInTheDocument();
  });

  it("handles input change correctly", () => {
    const { getByPlaceholderText } = render(<InputCompleted who="From: " />);
    const inputElement = getByPlaceholderText("From: City, Station or Airport");

    fireEvent.change(inputElement, { target: { value: "New York" } });

    expect(inputElement.value).toBe("New York");
  });
});
