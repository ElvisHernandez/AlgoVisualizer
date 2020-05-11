import * as React from "react";
import SortButton, { SortButtonProps } from "../SortButton/SortButton";
import { bubbleSort } from "../../utils/bubblesort/bubbleSort";

const BubbleSortButton: React.FC<SortButtonProps> = (props) => {
  const { setIsDisabled, setIsSorted, array, setArray } = props;

  function bubbleSortArray() {
    setIsDisabled(true);
    setIsSorted(true);
    bubbleSort(array, setArray, setIsDisabled);
  }
  return <SortButton {...props} sortArray={bubbleSortArray} />;
};

export default BubbleSortButton;
