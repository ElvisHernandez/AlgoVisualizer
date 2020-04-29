import React, { useState } from "react";
import styles from "./ArrayElements.module.css";
import ArrayElement from "../ArrayElement/ArrayElement";
import { mergeSort, compareArrays } from "../../utils/algorithms";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  //   const [array, setArray] = useState<number[]>([]);
  //   const color = "red";

  function makeArray(bars: number): number[] {
    const currentArray = [];

    for (let i = 0; i < bars; i++) {
      const height = Math.floor(Math.random() * 691 + 10);
      currentArray.push(height);
    }

    const arrayCopy = currentArray.slice();

    mergeSort(arrayCopy);

    currentArray.sort((a, b) => a - b);

    console.log(
      "The arrays are equal: ",
      compareArrays(currentArray, arrayCopy)
    );
    return currentArray;
  }

  return (
    <div className={styles.bars}>
      {makeArray(100).map((bar, index) => (
        <ArrayElement
          key={index}
          background="teal"
          width="5px"
          height={bar + "px"}
        />
      ))}
    </div>
  );
};

export default ArrayElements;
