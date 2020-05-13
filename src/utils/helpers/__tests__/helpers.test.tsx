import * as React from "react";
import { render } from "@testing-library/react";
import ArrayElement from "../../../components/ArrayElement/ArrayElement";
import {
  jsxComparator,
  makeJSXArray,
  compareArrays,
  animateArray,
  updateGlobal,
  color,
} from "../helpers";

jest.mock("../../../components/ArrayElement/ArrayElement.module.css", () => ({
  container: "container",
}));

const defaultProps = {
  background: "black",
  width: "2px",
  height: "10px",
};

describe("Test jsxComparator function", () => {
  // jsxComparator compares ArrayElement components based their height attribute
  test("Validate jsxComparator successfully determines smaller elements", () => {
    const shorterElement = <ArrayElement {...defaultProps} />;
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
    const element1 = <ArrayElement {...defaultProps} />;
    const element2 = <ArrayElement {...defaultProps} />;
    const comparison = jsxComparator(element1, element2);
    expect(comparison).toEqual(0);
  });
});

describe("Test makeJSXArray function", () => {
  test("should return a JSX.Element Array of length equal to its divCount argument", () => {
    const jsxArray: JSX.Element[] = makeJSXArray(56, 100);
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
  const element1 = <ArrayElement {...defaultProps} />;
  const element2 = <ArrayElement {...defaultProps} height="20px" />;
  const element3 = <ArrayElement {...defaultProps} height="30px" />;

  test("should return true for two ArrayElement arrays that contain same elements in same order", () => {
    const array1: JSX.Element[] = [element1, element2, element3];
    const array2: JSX.Element[] = [element1, element2, element3];
    const areEqual = compareArrays(array1, array2);
    expect(areEqual).toEqual(true);
  });

  test("should return false for two different arrays", () => {
    const array1: JSX.Element[] = [element1, element2, element3];
    const array2: JSX.Element[] = [element1, element3, element2];
    const areEqual = compareArrays(array1, array2);
    expect(areEqual).toEqual(false);
  });

  test("should return false for arrays of different lengths", () => {
    const array1: JSX.Element[] = [element1, element2];
    const array2: JSX.Element[] = [element1, element2, element3];
    const areEqual = compareArrays(array1, array2);
    expect(areEqual).toEqual(false);
  });
});

describe("Test animateArray function", () => {
  const element1 = <ArrayElement {...defaultProps} />;
  const element2 = <ArrayElement {...defaultProps} height="20px" />;
  const globalArray: JSX.Element[] = [element1, element2];

  // this function uses the useState hook in ArrayElements component
  // hence the minimal tests on it
  test("The animateArray function should call setSourceArray once", () => {
    const setSourceArray = jest.fn();
    animateArray(globalArray, element1, setSourceArray, color.RED);
    expect(setSourceArray).toHaveBeenCalledTimes(1);
    setSourceArray.mockReset();
  });
});

describe("Test updateGlobal function", () => {
  // this function depends on the ArrayElement component having an indexed key property
  const element1 = <ArrayElement key={1} {...defaultProps} />;
  const element2 = <ArrayElement key={2} {...defaultProps} height="20px" />;
  const element3 = <ArrayElement key={3} {...defaultProps} height="30px" />;

  test("globalArray input should remain the same length", () => {
    const globalArray: JSX.Element[] = [element2, element1, element3];
    const sourceArray: JSX.Element[] = [element1, element2];
    const lengthBefore = globalArray.length;
    updateGlobal(globalArray, sourceArray);
    expect(globalArray).toHaveLength(lengthBefore);
  });

  test("should order the globalArray elements in the same relative order of sourceArray", () => {
    const globalArray: JSX.Element[] = [element3, element2, element1];
    const sourceArray: JSX.Element[] = [element1, element2];
    updateGlobal(globalArray, sourceArray);
    const subGlobalArray = globalArray.slice(1, sourceArray.length + 1);
    const areEqual = compareArrays(subGlobalArray, sourceArray);
    expect(areEqual).toEqual(true);
  });
});
