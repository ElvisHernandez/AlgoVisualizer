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

export interface ArrayElementsProps {
  defaultDelay: number;
}

const ArrayElements: React.FC<ArrayElementsProps> = ({ defaultDelay }) => {
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [delay, setDelay] = useState(defaultDelay);

  useEffect(() => {
    makeArray();
  }, []);

  useEffect(() => {
    setGlobalMergeSortDelay(delay);
    setGlobalQuickSortDelay(delay);
  }, [delay]);

  function makeArray(): void {
    const currentArray = makeJSXArray(100, 1091);
    setSourceArray(currentArray);
  }

  function mergeSortArray(): void {
    setIsDisabled(true);
    setGlobalMergeSortArray(sourceArray);
    mergeSort(sourceArray, setSourceArray, setIsDisabled);
  }

  function quickSortArray(): void {
    setIsDisabled(true);
    quicksort(
      sourceArray,
      0,
      sourceArray.length - 1,
      setSourceArray,
      setIsDisabled
    );
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setDelay(+e.currentTarget.value);
  }

  return (
    <div data-testid="array-elements" className={styles.content}>
      <div>
        <button onClick={makeArray} disabled={isDisabled}>
          Make Array
        </button>
        <button onClick={mergeSortArray} disabled={isDisabled}>
          MergeSort
        </button>
        <button onClick={quickSortArray} disabled={isDisabled}>
          QuickSort
        </button>
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
