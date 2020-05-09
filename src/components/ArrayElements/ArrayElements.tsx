import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import { makeJSXArray } from "../../utils/helpers/helpers";
import {
  mergeSort,
  setGlobalMergeSortArray,
  setGlobalDelay,
} from "../../utils/mergeSort/mergeSort";
import { quicksort } from "../../utils/quicksort/quicksort";

export interface ArrayElementsProps {
  defaultDelay: number;
}

const ArrayElements: React.FC<ArrayElementsProps> = ({ defaultDelay }) => {
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);
  const [delay, setDelay] = useState(defaultDelay);

  useEffect(() => {
    makeArray();
  }, []);

  useEffect(() => {
    setGlobalDelay(delay);
  }, [delay]);

  function makeArray() {
    const currentArray = makeJSXArray(100, 1091);
    setSourceArray(currentArray);
  }

  function mergeSortArray(): void {
    setGlobalMergeSortArray(sourceArray);
    mergeSort(sourceArray, setSourceArray);
  }

  function quickSortArray() {
    console.log("is this working??");
    const temp = sourceArray.slice();
    quicksort(temp, 0, sourceArray.length - 1, setSourceArray);
    setSourceArray(temp);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setDelay(+e.currentTarget.value);
  }

  return (
    <div data-testid="array-elements" className={styles.content}>
      <div>
        <button onClick={makeArray}>Make Array</button>
        <button onClick={mergeSortArray}>MergeSort</button>
        <button onClick={quickSortArray}>QuickSort</button>
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
