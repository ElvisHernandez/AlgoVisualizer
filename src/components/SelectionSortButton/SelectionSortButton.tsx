import * as React from "react";
import SortButton, { SortButtonProps } from "../SortButton/SortButton";
import {
  setGlobalSelectionSortDelay,
  selectionSort,
} from "../../utils/selectionSort/selectionSort";

const SelectionSortButton: React.FC<SortButtonProps> = (props) => {
  const {
    setIsDisabled,
    setIsSorted,
    sourceArray,
    setSourceArray,
    delay,
  } = props;

  setGlobalSelectionSortDelay(delay);

  function selectionSortArray() {
    setIsDisabled(true);
    setIsSorted(true);
    selectionSort(sourceArray, setSourceArray, setIsDisabled);
  }
  return <SortButton {...props} sortArray={selectionSortArray} />;
};

export default SelectionSortButton;
