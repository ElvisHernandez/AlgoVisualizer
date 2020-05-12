import * as React from "react";
import renderer from "react-test-renderer";
import SelectionSortButton from "../SelectionSortButton";
import { SortButtonProps } from "../../SortButton/SortButton";

const defaultProps: SortButtonProps = {
  name: "SelectionSort",
  sourceArray: [],
  isSorted: false,
  setSourceArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
  delay: 0,
};

test("It renders correctly", () => {
  const tree = renderer
    .create(<SelectionSortButton {...defaultProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
