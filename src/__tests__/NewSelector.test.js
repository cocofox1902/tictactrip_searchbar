import React from "react";
import { render, screen } from "@testing-library/react";
import NewSelector from "../components/NewSelector";

describe("NewSelector", () => {
  test("renders the age options", () => {
    render(<NewSelector />);

    const ageSelect = screen.getByRole("combobox", { name: /age/i });
    expect(ageSelect).toBeInTheDocument();

    const options = Array.from(ageSelect.options).filter((option) => option.value !== "");
    expect(options).toHaveLength(27);

    options.forEach((option, index) => {
      const expectedLabel = `${index} ${index !== 1 ? "years" : "year"}`;
      expect(option.value).toBe(index.toString());
      expect(option.label).toBe(expectedLabel);
    });
  });
});
