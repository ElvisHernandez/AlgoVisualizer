import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import { makeJSXArray } from "../../utils/helpers/helpers";
import {
  mergeSort,
  setGlobalMergeSortArray,
} from "../../utils/mergeSort/mergeSort";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);

  useEffect(() => {
    makeArray();
  }, []);

  function makeArray() {
    const currentArray = makeJSXArray(100, 1091);
    setSourceArray(currentArray);
  }

  function sortArray(): void {
    setGlobalMergeSortArray(sourceArray);
    mergeSort(sourceArray, setSourceArray);
  }

  return (
    <div data-testid="array-elements" className={styles.content}>
      <div>
        <button onClick={makeArray}>Make Array</button>
        <button onClick={sortArray}>Sort Array</button>
      </div>
      <div className={styles.bars}>{sourceArray.map((bar) => bar)}</div>
    </div>
  );
};

export default ArrayElements;
