import * as React from "react";
import renderer from "react-test-renderer";
import BubbleSortButton from "../BubbleSortButton";
import { SortButtonProps } from "../../SortButton/SortButton";

const defaultProps: SortButtonProps = {
  name: "BubbleSort",
  array: [],
  isSorted: false,
  setArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
};

test("It renders correctly", () => {
  const tree = renderer.create(<BubbleSortButton {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
