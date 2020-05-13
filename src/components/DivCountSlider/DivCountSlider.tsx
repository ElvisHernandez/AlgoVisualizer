import React from "react";
import Slider from "../Slider/Slider";

export interface DivCountSliderProps {
  makeArray: (divCount: number, divLength: number) => void;
  defaultDivCount?: number;
  defaultDivLength?: number;
  divCount: number;
  setDivCount?: React.Dispatch<React.SetStateAction<number>>;
  divLength: number;
  setDivLength?: React.Dispatch<React.SetStateAction<number>>;
  isSorted: boolean;
}

const DivCountSlider: React.FC<DivCountSliderProps> = ({
  makeArray,
  defaultDivCount,
  divLength,
  divCount,
  setDivCount,
  isSorted,
}) => {
  function handleChange(e: any, newValue: number | number[]) {
    setDivCount!(newValue as number);
  }

  return (
    <Slider
      name="Array Size"
      value={divCount}
      min={10}
      max={defaultDivCount!}
      disabled={isSorted}
      handleChange={handleChange}
    />
  );
};

export default DivCountSlider;
