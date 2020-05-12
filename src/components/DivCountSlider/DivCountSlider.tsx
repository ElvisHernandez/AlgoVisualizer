import * as React from "react";

export interface DivCountSliderProps {
  makeArray: (divCount: number, divLength: number) => void;
  defaultDivCount: number;
  divLength: number;
  setDivCount: React.Dispatch<React.SetStateAction<number>>;
}

const DivCountSlider: React.FC<DivCountSliderProps> = ({
  makeArray,
  defaultDivCount,
  divLength,
  setDivCount,
}) => {
  function handleChange(e: any) {
    const { value } = e.target;
    setDivCount(value);
    makeArray(value, divLength);
  }

  return (
    <>
      <label htmlFor="div-count-slider">Div Count</label>
      <input
        id="div-count-slider"
        type="range"
        min="10"
        max={defaultDivCount}
        onChange={handleChange}
      />
    </>
  );
};

export default DivCountSlider;
