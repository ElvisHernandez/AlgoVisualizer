import * as React from "react";
import { jsxComparator } from "../helpers";
import ArrayElement from "../../../components/ArrayElement/ArrayElement";

describe("Test helper functions for correct functionality", () => {
  const defaultProps = {
    background: "black",
    width: "2px",
  };

  // jsxComparator compares elements based on their height attribute
  test("Validate jsxComparator successfully determines smaller elements", () => {
    const shorterElement = <ArrayElement {...defaultProps} height="10px" />;
    const tallerElement = <ArrayElement {...defaultProps} height="21px" />;
    const comparison = jsxComparator(shorterElement, tallerElement);
    expect(comparison).toBeLessThan(0);
  });

  test("Validate jsxComparator successfully determines larger elements", () => {
    const shorterElement = <ArrayElement {...defaultProps} height="609px" />;
    const tallerElement = <ArrayElement {...defaultProps} height="610px" />;
    const comparison = jsxComparator(tallerElement, shorterElement);
    expect(comparison).toBeGreaterThan(0);
  });

  test("Validate jsxComparator successfully determines equal elements", () => {
    const element1 = <ArrayElement {...defaultProps} height="350px" />;
    const element2 = <ArrayElement {...defaultProps} height="350px" />;
    const comparison = jsxComparator(element1, element2);
    expect(comparison).toEqual(0);
  });
});
