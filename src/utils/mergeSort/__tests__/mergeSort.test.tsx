import * as React from "react";
import { mergeSort, mergeHalves } from "../mergeSort";
import ArrayElement, {
  ArrayElementProps,
} from "../../../components/ArrayElement/ArrayElement";
import {
  compareArrays,
  makeJSXArray,
  jsxComparator,
} from "../../helpers/helpers";

const defaultProps: ArrayElementProps = {
  background: "black",
  width: "2px",
  height: "10px",
};

describe("Test mergeHalves function ", () => {
  const setSourceArray = jest.fn();

  test("Should return two sorted ArrayElement arrays in sorted order", async () => {
    const jsxArray: JSX.Element[] = [];
    for (let i = 0; i < 10; i++) {
      jsxArray.push(<ArrayElement {...defaultProps} height={`${10 + i}px`} />);
    }
    const sortedArray1 = jsxArray.slice();
    const sortedArray2 = sortedArray1.splice(3, 3);
    const mergedArray = await mergeHalves(
      sortedArray1,
      sortedArray2,
      setSourceArray
    );
    const areEqual = compareArrays(jsxArray, mergedArray);
    expect(areEqual).toEqual(true);
  });
});

describe("Test mergeSort function", () => {
  const setSourceArray = jest.fn();

  test("should sort an array of ArrayElement react components by their height attributes", () => {
    const areEqualArray: boolean[] = [];
    // make 100 different arrays and check if mergeSort sorts them
    for (let i = 0; i < 100; i++) {
      const currentArray = makeJSXArray(100, 100);
      const copy1 = currentArray.slice();
      const copy2 = copy1;

      mergeSort(copy1, setSourceArray);
      copy2.sort((a, b) => jsxComparator(a, b));
      const isEqual = compareArrays(copy1, copy2);
      areEqualArray.push(isEqual);
    }
    const doesSort = !areEqualArray.includes(false);
    expect(doesSort).toEqual(true);
  });
});
