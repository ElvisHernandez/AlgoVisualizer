import * as React from "react";
import renderer from "react-test-renderer";
import QuickSortButton from "../QuickSortButton";
import { SortButtonProps } from "../../SortButton/SortButton";

jest.mock("../../ArrayElement/ArrayElement.module.css", () => ({
  container: "container",
}));

const defaultProps: SortButtonProps = {
  name: "QuickSort",
  sourceArray: [],
  isSorted: false,
  setSourceArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
  delay: 0,
};

test("It renders correctly", () => {
  const tree = renderer.create(<QuickSortButton {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
