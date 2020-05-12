import * as React from "react";

export interface SpeedSliderProps {
  delay: number;
  setDelay: React.Dispatch<React.SetStateAction<number>>;
}

const SpeedSlider: React.FC<SpeedSliderProps> = ({ delay, setDelay }) => {
  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setDelay(+e.currentTarget.value);
  }
  return (
    <>
      <label htmlFor="speed-slider">Sorting Speed</label>
      <input
        id="speed-slider"
        className="custom-range"
        type="range"
        min="0.001"
        max="100"
        value={delay}
        onChange={handleChange}
      />
    </>
  );
};

export default SpeedSlider;
