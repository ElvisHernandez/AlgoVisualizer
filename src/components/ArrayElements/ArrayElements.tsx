import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import { makeJSXArray } from "../../utils/helpers/helpers";
import {
  mergeSort,
  setGlobalMergeSortArray,
  setGlobalDelay,
} from "../../utils/mergeSort/mergeSort";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);
  const [delay, setDelay] = useState(0);

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

  function sortArray(): void {
    setGlobalMergeSortArray(sourceArray);
    mergeSort(sourceArray, setSourceArray);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setDelay(+e.currentTarget.value);
  }

  return (
    <div data-testid="array-elements" className={styles.content}>
      <div>
        <button onClick={makeArray}>Make Array</button>
        <button onClick={sortArray}>Sort Array</button>
        <input
          type="range"
          min="0"
          max="100"
          value={delay}
          className="slider"
          onChange={handleChange}
        />
      </div>
      <div className={styles.bars}>{sourceArray.map((bar) => bar)}</div>
    </div>
  );
};

export default ArrayElements;
