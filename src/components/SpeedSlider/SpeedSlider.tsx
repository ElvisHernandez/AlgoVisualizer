import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export interface SpeedSliderProps {
  delay: number;
  setDelay: React.Dispatch<React.SetStateAction<number>>;
}

const useStyles = makeStyles({
  root: {
    width: 200,
    textAlign: "center",
  },
});

const SpeedSlider: React.FC<SpeedSliderProps> = ({ delay, setDelay }) => {
  const classes = useStyles();
  function handleChange(e: any, newValue: number | number[]): void {
    setDelay(newValue as number);
  }
  return (
    <div className={classes.root}>
      <p style={{ margin: "0" }}>Sorting Speed</p>
      <Slider value={delay} min={0.001} max={100} onChange={handleChange} />
    </div>
  );
};

export default SpeedSlider;
