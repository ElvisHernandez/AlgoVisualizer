import React from "react";
import {
  setGlobalMergeSortArray,
  mergeSort,
  setGlobalMergeSortDelay,
} from "../../utils/mergeSort/mergeSort";
import SortButton, { SortButtonProps } from "../SortButton/SortButton";

const MergeSortButton: React.FC<SortButtonProps> = (props) => {
  const {
    sourceArray,
    setSourceArray,
    setIsSorted,
    setIsDisabled,
    delay,
  } = props;

  setGlobalMergeSortDelay(delay!);

  function mergeSortArray(): void {
    setIsDisabled(true);
    setIsSorted(true);
    setGlobalMergeSortArray(sourceArray);
    mergeSort(sourceArray, setSourceArray, setIsDisabled);
  }
  return <SortButton {...props} sortArray={mergeSortArray} />;
};

export default MergeSortButton;
