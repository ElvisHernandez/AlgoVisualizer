import * as React from "react";
import Slider from "../Slider/Slider";

export interface SpeedSliderProps {
  delay: number;
  setDelay: React.Dispatch<React.SetStateAction<number>>;
}

const SpeedSlider: React.FC<SpeedSliderProps> = ({ delay, setDelay }) => {
  function handleChange(e: any, newValue: number | number[]): void {
    setDelay(newValue as number);
  }
  return (
    <Slider
      name="Sorting Speed"
      value={delay}
      min={0.001}
      max={100}
      handleChange={handleChange}
    />
  );
};

export default SpeedSlider;
