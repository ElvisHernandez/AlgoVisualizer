import * as React from "react";
import { render } from "@testing-library/react";
import { jsxComparator, makeJSXArray } from "../helpers";
import ArrayElement from "../../../components/ArrayElement/ArrayElement";

describe("Test jsxComparator function successfully compares  ArrayElement components based on height", () => {
  const defaultProps = {
    background: "black",
    width: "2px",
  };

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

describe("Test makeJSXArray function", () => {
  test("should return a JSX.Element Array of length equal to its divCount argument", () => {
    const jsxArray = makeJSXArray(56, 100);
    expect(jsxArray).toHaveLength(56);
  });

  test("The returned array should contain elements which are ArrayElement components", () => {
    const jsxArray: JSX.Element[] = makeJSXArray(1, 100);
    const { getByTestId } = render(jsxArray[0]);
    const arrayElement = getByTestId("array-element");
    expect(arrayElement).toBeTruthy();
  });

  test("Test that every ArrayElement component in the output is within 5px and the heightRange argument", () => {
    const divCount = 1000;
    const heightRange = 995;
    const jsxArray = makeJSXArray(divCount, heightRange);
    for (let i = 0; i < jsxArray.length; i++) {
      const height: number = +jsxArray[i].props.height.slice(0, -2);
      expect(height).toBeGreaterThanOrEqual(5);
      expect(height).toBeLessThanOrEqual(heightRange + 5);
    }
  });
});
