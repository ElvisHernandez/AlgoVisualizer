import React from "react";
import {
  setGlobalMergeSortArray,
  mergeSort,
} from "../../utils/mergeSort/mergeSort";

export interface MergeSortButtonProps {
  array: JSX.Element[];
  setArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  isSorted: boolean;
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const MergeSortButton: React.FC<MergeSortButtonProps> = ({
  array,
  setArray,
  isSorted,
  setIsSorted,
  setIsDisabled,
}) => {
  function mergeSortArray(): void {
    setIsDisabled(true);
    setIsSorted(true);
    setGlobalMergeSortArray(array);
    mergeSort(array, setArray, setIsDisabled);
  }
  return (
    <button onClick={mergeSortArray} disabled={isSorted}>
      MergeSort
    </button>
  );
};

export default MergeSortButton;
