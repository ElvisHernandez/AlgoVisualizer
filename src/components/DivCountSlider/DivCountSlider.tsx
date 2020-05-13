import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export interface DivCountSliderProps {
  makeArray: (divCount: number, divLength: number) => void;
  defaultDivCount: number;
  divLength: number;
  divCount: number;
  setDivCount: React.Dispatch<React.SetStateAction<number>>;
}

const useStyles = makeStyles({
  root: {
    width: 200,
    textAlign: "center",
    marginLeft: "1rem",
  },
});

const DivCountSlider: React.FC<DivCountSliderProps> = ({
  makeArray,
  defaultDivCount,
  divLength,
  divCount,
  setDivCount,
}) => {
  const classes = useStyles();

  function handleChange(e: any, newValue: number | number[]) {
    setDivCount(newValue as number);
    makeArray(newValue as number, divLength);
  }

  return (
    <div className={classes.root}>
      <p style={{ margin: "0" }}>Array Size</p>
      <Slider
        id="div-count-slider"
        value={divCount}
        min={10}
        max={defaultDivCount}
        onChange={handleChange}
      />
    </div>
  );
};

export default DivCountSlider;
