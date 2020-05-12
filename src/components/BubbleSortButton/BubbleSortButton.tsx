import * as React from "react";
import SortButton, { SortButtonProps } from "../SortButton/SortButton";
import {
  bubbleSort,
  setGlobalBubbleSortDelay,
} from "../../utils/bubbleSort/bubbleSort";

const BubbleSortButton: React.FC<SortButtonProps> = (props) => {
  const {
    setIsDisabled,
    setIsSorted,
    sourceArray,
    setSourceArray,
    delay,
  } = props;

  setGlobalBubbleSortDelay(delay);

  function bubbleSortArray() {
    setIsDisabled(true);
    setIsSorted(true);
    bubbleSort(sourceArray, setSourceArray, setIsDisabled);
  }
  return <SortButton {...props} sortArray={bubbleSortArray} />;
};

export default BubbleSortButton;
