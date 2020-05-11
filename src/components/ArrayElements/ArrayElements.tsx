import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import { makeJSXArray } from "../../utils/helpers/helpers";
import {
  mergeSort,
  setGlobalMergeSortArray,
  setGlobalMergeSortDelay,
} from "../../utils/mergeSort/mergeSort";
import {
  quicksort,
  setGlobalQuickSortDelay,
} from "../../utils/quicksort/quicksort";
import {
  bubbleSort,
  setGlobalBubbleSortDelay,
} from "../../utils/bubblesort/bubbleSort";
import MergeSortButton from "../MergeSortButton/MergeSortButton";
import QuickSortButton from "../QuickSortButton/QuickSortButton";
import BubbleSortButton from "../BubbleSortButton/BubbleSortButton";

export interface ArrayElementsProps {
  defaultDelay: number;
}

const ArrayElements: React.FC<ArrayElementsProps> = ({ defaultDelay }) => {
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [delay, setDelay] = useState(defaultDelay);

  useEffect(() => {
    makeArray();
  }, []);

  useEffect(() => {
    setGlobalMergeSortDelay(delay);
    setGlobalQuickSortDelay(delay);
    setGlobalBubbleSortDelay(delay);
  }, [delay]);

  function makeArray(): void {
    const currentArray = makeJSXArray(100, 1091);
    setIsSorted(false);
    setSourceArray(currentArray);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setDelay(+e.currentTarget.value);
  }

  const sortingProps = {
    array: sourceArray,
    setArray: setSourceArray,
    isSorted: isSorted,
    setIsSorted: setIsSorted,
    setIsDisabled: setIsDisabled,
  };

  return (
    <div data-testid="array-elements" className={styles.content}>
      <div>
        <button onClick={makeArray} disabled={isDisabled}>
          Make Array
        </button>
        <MergeSortButton {...sortingProps} name="MergeSort" />
        <QuickSortButton {...sortingProps} name="QuickSort" />
        <BubbleSortButton {...sortingProps} name="BubbleSort" />
        <label>
          Sorting Speed
          <input
            type="range"
            min="0.001"
            max="100"
            value={delay}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.bars}>{sourceArray.map((bar) => bar)}</div>
    </div>
  );
};

export default ArrayElements;
