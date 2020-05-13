import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export interface DivLengthSliderProps {
  makeArray: (divCount: number, divLength: number) => void;
  defaultDivLength: number;
  divCount: number;
  divLength: number;
  setDivLength: React.Dispatch<React.SetStateAction<number>>;
}

const useStyles = makeStyles({
  root: {
    width: 200,
    textAlign: "center",
    marginLeft: "1rem",
  },
});

const DivLengthSlider: React.FC<DivLengthSliderProps> = ({
  makeArray,
  defaultDivLength,
  divCount,
  divLength,
  setDivLength,
}) => {
  const classes = useStyles();
  function handleChange(e: any, newValue: number | number[]) {
    // const { value } = e.target;
    setDivLength(newValue as number);
    makeArray(divCount, newValue as number);
  }

  return (
    <div className={classes.root}>
      <p style={{ margin: "0" }}>Div Length</p>
      <Slider
        value={divLength}
        min={100}
        max={defaultDivLength}
        onChange={handleChange}
      />
    </div>
  );
};

export default DivLengthSlider;
