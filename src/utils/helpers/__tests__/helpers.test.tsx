import * as React from "react";
import { render } from "@testing-library/react";
import { jsxComparator, makeJSXArray, compareArrays } from "../helpers";
import ArrayElement from "../../../components/ArrayElement/ArrayElement";

const defaultProps = {
  background: "black",
  width: "2px",
};

describe("Test jsxComparator function", () => {
  // jsxComparator compares ArrayElement components based their height attribute
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

describe("Testing compareArrays function", () => {
  const element1 = <ArrayElement {...defaultProps} height="10px" />;
  const element2 = <ArrayElement {...defaultProps} height="20px" />;
  const element3 = <ArrayElement {...defaultProps} height="30px" />;

  test("should return true for two ArrayElement arrays that contain same elements in same order", () => {
    const array1 = [element1, element2, element3];
    const array2 = [element1, element2, element3];
    const areEqual = compareArrays(array1, array2);
    expect(areEqual).toEqual(true);
  });

  test("should return false for two different arrays", () => {
    const array1 = [element1, element2, element3];
    const array2 = [element1, element3, element2];
    const areEqual = compareArrays(array1, array2);
    expect(areEqual).toEqual(false);
  });

  test("should return false for arrays of different lengths", () => {
    const array1 = [element1, element2];
    const array2 = [element1, element2, element3];
    const areEqual = compareArrays(array1, array2);
    expect(areEqual).toEqual(false);
  });
});
