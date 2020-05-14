import * as React from "react";
import renderer from "react-test-renderer";
import SpeedSlider, { SpeedSliderProps } from "../SpeedSlider";

const setDelay = jest.fn();

const speedSliderProps: SpeedSliderProps = {
  delay: 0,
  setDelay: setDelay,
};

test("It renders correctly", () => {
  const tree = renderer.create(<SpeedSlider {...speedSliderProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
