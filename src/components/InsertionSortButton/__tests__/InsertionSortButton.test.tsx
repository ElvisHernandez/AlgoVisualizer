import * as React from "react";
import renderer from "react-test-renderer";
import InsertionSortButton from "../InsertionSortButton";
import { SortButtonProps } from "../../SortButton/SortButton";

const defaultProps: SortButtonProps = {
  name: "InsertionSort",
  sourceArray: [],
  isSorted: false,
  setSourceArray: jest.fn(),
  setIsDisabled: jest.fn(),
  setIsSorted: jest.fn(),
  delay: 0,
};

test("It renders correctly", () => {
  const tree = renderer
    .create(<InsertionSortButton {...defaultProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
