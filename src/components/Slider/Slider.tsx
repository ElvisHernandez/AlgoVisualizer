import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiSlider from "@material-ui/core/Slider";

export interface SliderProps {
  name: string;
  value: number;
  min: number;
  max: number;
  disabled: boolean;
  handleChange: (event: any, value: number | number[]) => void;
}

const useStyles = makeStyles({
  root: {
    width: 200,
    textAlign: "center",
    marginLeft: "1rem",
  },
});

const Slider: React.FC<SliderProps> = ({
  name,
  value,
  min,
  max,
  disabled,
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {name}
      <MuiSlider
        id="div-count-slider"
        disabled={disabled}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
