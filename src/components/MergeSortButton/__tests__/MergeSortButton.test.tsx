import * as React from "react";
import renderer from "react-test-renderer";
import MergeSortButton from "../MergeSortButton";
import { SortButtonProps } from "../../SortButton/SortButton";

const defaultProps: SortButtonProps = {
  name: "MergeSort",
  sourceArray: [],
  isSorted: false,
  setSourceArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
  delay: 0,
};

test("It renders correctly", () => {
  const tree = renderer.create(<MergeSortButton {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
