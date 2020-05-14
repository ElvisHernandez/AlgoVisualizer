import * as React from "react";
import renderer from "react-test-renderer";
import DivLengthSlider from "../DivLengthSlider";
import { DivCountSliderProps } from "../../DivCountSlider/DivCountSlider";

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
  const tree = renderer
    .create(<DivLengthSlider {...divSliderProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
