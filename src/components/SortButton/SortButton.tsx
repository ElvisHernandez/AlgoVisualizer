import * as React from "react";
import { setGlobalMergeSortArray } from "../../utils/mergeSort/mergeSort";

export interface SortButtonProps {
  name: string;
  array: JSX.Element[];
  setArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  isSorted: boolean;
  setIsSorted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  sortArray?: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({
  name,
  array,
  setArray,
  isSorted,
  setIsSorted,
  setIsDisabled,
  sortArray,
}) => {
  return (
    <button onClick={sortArray} disabled={isSorted}>
      {name}
    </button>
  );
};

export default SortButton;
