import * as React from "react";
import SortButton, { SortButtonProps } from "../SortButton/SortButton";
import { quicksort } from "../../utils/quicksort/quicksort";

const QuickSortButton: React.FC<SortButtonProps> = (props) => {
  const { setIsDisabled, setIsSorted, array, setArray } = props;

  function quickSortArray() {
    setIsDisabled(true);
    setIsSorted(true);
    quicksort(array, 0, array.length - 1, setArray, setIsDisabled);
  }

  return <SortButton {...props} sortArray={quickSortArray} />;
};

export default QuickSortButton;
