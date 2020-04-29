import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import ArrayElement, { ArrayElementProps } from "../ArrayElement/ArrayElement";
import { mergeSort, compareArrays } from "../../utils/algorithms";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  const [array, setArray] = useState<number[]>([]);
  const [multiArray, setMultiArray] = useState<Array<number[]>>([]);
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

  function sortArray(): void {
    const temp = array.slice();
    console.log(temp);
    mergeSort(temp, setMultiArray);
    setArray(temp);
  }

  useEffect(() => {
    console.log(multiArray);
  }, [multiArray]);

  function jsxComparator(
    element1: React.FC<ArrayElementProps>,
    element2: React.FC<ArrayElementProps>
  ): boolean {}

  console.log(
    +Object.values(
      <ArrayElement background="red" width="5px" height="10px" />
    )[4].height.slice(0, 2)
  );

  return (
    <div className={styles.bars}>
      <div>
        <button onClick={makeArray}>Make Array</button>
        <button onClick={sortArray}>Sort Array</button>
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
