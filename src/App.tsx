import React from "react";
import ArrayElements from "./components/ArrayElements/ArrayElements";

function App() {
  function computeDivCount(): number {
    const { height } = window.screen;
    const heightRange = height * 0.6;
    // divide by 7 because thats approximately how many vertical
    // pixels a single ArrayElement component takes up
    const divRange = Math.floor(heightRange / 7);
    return divRange;
  }

  function computeDivLength(): number {
    let { width } = window.screen;
    if (!width) width = 1000;
    const widthRange = width * 0.6;
    console.log("This is the default div length: ", widthRange);
    return widthRange;
  }

  return (
    <ArrayElements
      defaultDelay={0.001}
      defaultDivCount={computeDivCount()}
      defaultDivLength={computeDivLength()}
    />
  );
}

export default App;
