import * as React from "react";
import renderer from "react-test-renderer";
import QuickSortButton from "../QuickSortButton";
import { SortButtonProps } from "../../SortButton/SortButton";

const defaultProps: SortButtonProps = {
  name: "QuickSort",
  array: [],
  isSorted: false,
  setArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
};

test("It renders correctly", () => {
  const tree = renderer.create(<QuickSortButton {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
