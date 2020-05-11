import React from "react";
import {
  setGlobalMergeSortArray,
  mergeSort,
} from "../../utils/mergeSort/mergeSort";
import SortButton, { SortButtonProps } from "../SortButton/SortButton";

const MergeSortButton: React.FC<SortButtonProps> = (props) => {
  const { array, setArray, setIsSorted, setIsDisabled } = props;

  function mergeSortArray(): void {
    setIsDisabled(true);
    setIsSorted(true);
    setGlobalMergeSortArray(array);
    mergeSort(array, setArray, setIsDisabled);
  }
  return <SortButton {...props} sortArray={mergeSortArray} />;
};

export default MergeSortButton;
