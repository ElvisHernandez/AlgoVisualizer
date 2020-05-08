import * as React from "react";
import renderer from "react-test-renderer";
import ArrayElement, { ArrayElementProps } from "../ArrayElement";

const defaultProps: ArrayElementProps = {
  background: "black",
  width: "5px",
  height: "10px",
};

test("It renders correctly", () => {
  const tree = renderer.create(<ArrayElement {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
