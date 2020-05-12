import * as React from "react";
import renderer from "react-test-renderer";
import SortButton, { SortButtonProps } from "../SortButton";

const defaultProps: SortButtonProps = {
  name: "Generic Button",
  sourceArray: [],
  isSorted: false,
  setSourceArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
  delay: 0,
};

test("It renders correctly", () => {
  const tree = renderer.create(<SortButton {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
