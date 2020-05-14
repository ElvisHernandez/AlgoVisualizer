import * as React from "react";
import renderer from "react-test-renderer";
import Slider, { SliderProps } from "../Slider";

const handleChange = jest.fn();

const genericSliderProps: SliderProps = {
  name: "Generic Slider",
  min: 0,
  max: 100,
  value: 50,
  handleChange: handleChange,
};

test("It renders correctly", () => {
  const tree = renderer.create(<Slider {...genericSliderProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
