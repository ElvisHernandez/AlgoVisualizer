import * as React from "react";
import renderer from "react-test-renderer";
import BubbleSortButton from "../BubbleSortButton";
import { SortButtonProps } from "../../SortButton/SortButton";

jest.mock("../../ArrayElement/ArrayElement.module.css", () => ({
  container: "container",
}));

const defaultProps: SortButtonProps = {
  name: "BubbleSort",
  sourceArray: [],
  isSorted: false,
  setSourceArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
  delay: 0,
};

test("It renders correctly", () => {
  const tree = renderer.create(<BubbleSortButton {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
