import * as React from "react";
import Slider from "../Slider/Slider";
import { DivCountSliderProps } from "../DivCountSlider/DivCountSlider";

const DivLengthSlider: React.FC<DivCountSliderProps> = ({
  makeArray,
  defaultDivLength,
  divCount,
  divLength,
  setDivLength,
  isSorted,
}) => {
  function handleChange(e: any, newValue: number | number[]) {
    setDivLength!(newValue as number);
    makeArray(divCount, newValue as number);
  }

  return (
    <Slider
      name="Div Length"
      value={divLength}
      min={100}
      max={defaultDivLength!}
      disabled={isSorted}
      handleChange={handleChange}
    />
  );
};

export default DivLengthSlider;
