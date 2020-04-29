import React, { useState } from "react";
import styles from "./ArrayElements.module.css";
import ArrayElement from "../ArrayElement/ArrayElement";
import { mergeSort, compareArrays } from "../../utils/algorithms";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  const [array, setArray] = useState<number[]>([]);
  //   const color = "red";

  // function testSort(): void {
  //   for (let i = 0; i < 1000; i++) {
  //     const array = makeArray(100);
  //     const copy1 = array.slice();
  //     const copy2 = array.slice();

  //     mergeSort(copy1);
  //     copy2.sort((a, b) => a - b);

  //     console.log(compareArrays(copy1, copy2));
  //   }
  // }

  function makeArray(): void {
    const currentArray = [];

    for (let i = 0; i < 100; i++) {
      const height = Math.floor(Math.random() * 691 + 10);
      currentArray.push(height);
    }

    setArray(currentArray);
    // mergeSort(currentArray);
  }

  return (
    <div className={styles.bars}>
      <div>
        <button onClick={makeArray}>Make Array</button>
      </div>
      {array.map((bar, index) => (
        <ArrayElement
          key={`${index}`}
          background="teal"
          width="5px"
          height={bar + "px"}
        />
      ))}
    </div>
  );
};

export default ArrayElements;
