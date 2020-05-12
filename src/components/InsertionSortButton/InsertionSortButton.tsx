import * as React from "react";
import SortButton, { SortButtonProps } from "../SortButton/SortButton";
import {
  setGlobalInsertionSortDelay,
  insertionSort,
} from "../../utils/insertionSort/insertionSort";

const InsertionSortButton: React.FC<SortButtonProps> = (props) => {
  const {
    setIsDisabled,
    setIsSorted,
    sourceArray,
    setSourceArray,
    delay,
  } = props;

  setGlobalInsertionSortDelay(delay);

  function selectionSortArray() {
    setIsDisabled(true);
    setIsSorted(true);
    insertionSort(sourceArray, setSourceArray, setIsDisabled);
  }
  return <SortButton {...props} sortArray={selectionSortArray} />;
};

export default InsertionSortButton;
