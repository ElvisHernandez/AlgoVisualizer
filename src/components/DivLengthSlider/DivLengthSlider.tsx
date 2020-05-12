import * as React from "react";

export interface DivLengthSliderProps {
  makeArray: (divCount: number, divLength: number) => void;
  defaultDivLength: number;
  divCount: number;
  setDivLength: React.Dispatch<React.SetStateAction<number>>;
}

const DivLengthSlider: React.FC<DivLengthSliderProps> = ({
  makeArray,
  defaultDivLength,
  divCount,
  setDivLength,
}) => {
  function handleChange(e: any) {
    const { value } = e.target;
    console.log(value);
    // setDivLength(value);
    makeArray(divCount, value);
  }

  return (
    <>
      <label htmlFor="div-length-slider">Div Length</label>
      <input
        type="range"
        min="100"
        max={defaultDivLength}
        onChange={handleChange}
      />
    </>
  );
};

export default DivLengthSlider;
