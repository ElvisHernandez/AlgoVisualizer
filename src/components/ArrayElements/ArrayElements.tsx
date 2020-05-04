import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import ArrayElement from "../ArrayElement/ArrayElement";
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

  function makeArray(): void {
    const currentArray = [];
    for (let i = 0; i < 100; i++) {
      const height = Math.floor(Math.random() * 1091 + 5);
      currentArray.push(
        <ArrayElement
          key={i}
          background="#00e5ff"
          width="5px"
          height={height + "px"}
        />
      );
    }
    setSourceArray(currentArray);
  }

  function sortArray(): void {
    setGlobalMergeSortArray(sourceArray);
    mergeSort(sourceArray, setSourceArray);
  }

  return (
    <div className={styles.content}>
      <div>
        <button onClick={makeArray}>Make Array</button>
        <button onClick={sortArray}>Sort Array</button>
      </div>
      <div className={styles.bars}>{sourceArray.map((bar) => bar)}</div>
    </div>
  );
};

export default ArrayElements;
