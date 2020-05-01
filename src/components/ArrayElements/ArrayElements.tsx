import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import ArrayElement, { ArrayElementProps } from "../ArrayElement/ArrayElement";
import { mergeSort, setGlobalArray } from "../../utils/algorithms";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);

  function makeArray(): void {
    const currentArray = [];

    for (let i = 0; i < 100; i++) {
      const height = Math.floor(Math.random() * 691 + 10);
      currentArray.push(
        <ArrayElement
          key={i}
          background="teal"
          width="10px"
          height={height + "px"}
        />
      );
    }

    setSourceArray(currentArray);
  }

  function sortArray(): void {
    setGlobalArray(sourceArray);
    mergeSort(sourceArray, setSourceArray);
  }

  return (
    <>
      <div className={styles.bars}>
        <div>
          <button onClick={makeArray}>Make Array</button>
          <button onClick={sortArray}>Sort Array</button>
        </div>

        {sourceArray.map((bar) => bar)}
      </div>
    </>
  );
};

export default ArrayElements;
