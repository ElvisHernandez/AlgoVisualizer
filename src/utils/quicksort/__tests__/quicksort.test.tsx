import * as React from "react";
import {
  compareArrays,
  jsxComparator,
  makeJSXArray,
} from "../../helpers/helpers";
import { quicksort } from "../quicksort";

describe("Test quicksort function", () => {
  const setSourceArray = jest.fn();
  test("should sort an array of ArrayElement react components by their height attributes", () => {
    const areEqualArray: boolean[] = [];
    // make 100 different arrays and check if mergeSort sorts them
    for (let i = 0; i < 100; i++) {
      const currentArray = makeJSXArray(100, 100);
      const copy1 = currentArray.slice();
      const copy2 = copy1;

      quicksort(copy1, 0, copy1.length - 1, setSourceArray);
      copy2.sort((a, b) => jsxComparator(a, b));
      const isEqual = compareArrays(copy1, copy2);
      areEqualArray.push(isEqual);
    }
    const doesSort = !areEqualArray.includes(false);
    expect(doesSort).toEqual(true);
  });
});
