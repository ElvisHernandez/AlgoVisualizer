import * as React from "react";
import renderer from "react-test-renderer";
import SortButton, { SortButtonProps } from "../SortButton";

const defaultProps: SortButtonProps = {
  name: "Generic Button",
  array: [],
  isSorted: false,
  setArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
};

test("It renders correctly", () => {
  const tree = renderer.create(<SortButton {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
