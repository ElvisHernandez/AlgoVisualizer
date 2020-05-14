import * as React from "react";
import renderer from "react-test-renderer";
import DivCountSlider, { DivCountSliderProps } from "../DivCountSlider";

const setDivCount = jest.fn();
const makeArray = jest.fn();
const divSliderProps: DivCountSliderProps = {
  makeArray: makeArray,
  divLength: 1000,
  defaultDivCount: 100,
  divCount: 50,
  setDivCount: setDivCount,
  isSorted: false,
};

test("It renders correctly", () => {
  const tree = renderer.create(<DivCountSlider {...divSliderProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
