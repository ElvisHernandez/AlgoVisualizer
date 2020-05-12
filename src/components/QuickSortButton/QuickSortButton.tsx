import * as React from "react";
import SortButton, { SortButtonProps } from "../SortButton/SortButton";
import {
  quicksort,
  setGlobalQuickSortDelay,
} from "../../utils/quickSort/quicksort";

const QuickSortButton: React.FC<SortButtonProps> = (props) => {
  const {
    setIsDisabled,
    setIsSorted,
    sourceArray,
    setSourceArray,
    delay,
  } = props;

  setGlobalQuickSortDelay(delay);

  function quickSortArray() {
    setIsDisabled(true);
    setIsSorted(true);
    quicksort(
      sourceArray,
      0,
      sourceArray.length - 1,
      setSourceArray,
      setIsDisabled
    );
  }

  return <SortButton {...props} sortArray={quickSortArray} />;
};

export default QuickSortButton;
