import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import ArrayElement, { ArrayElementProps } from "../ArrayElement/ArrayElement";
import { mergeSort } from "../../utils/algorithms";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  const [array, setArray] = useState<JSX.Element[]>([]);
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);
  const [multiArray, setMultiArray] = useState<Array<JSX.Element[]>>([]);

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

    setArray(currentArray);
    setSourceArray(currentArray);
  }

  function sortArray(): void {
    const temp = sourceArray.slice();
    // console.log(temp);
    mergeSort(temp, array, setArray, setSourceArray);
    // setSourceArray(temp);
  }

  useEffect(() => {
    console.log(multiArray);
  }, [multiArray]);

  // useEffect(() => {

  // },[array])

  return (
    <>
      <div className={styles.bars}>
        <div>
          <button onClick={makeArray}>Make Array</button>
          <button onClick={sortArray}>Sort Array</button>
        </div>
        {/* {array.map((bar, index) => (
        <ArrayElement
          key={`${index}`}
          background="teal"
          width="5px"
          height={bar + "px"}
        />
      ))} */}
        {sourceArray.map((bar) => bar)}
      </div>
      {/* <div className={styles.bars}>
        {multiArray.map((bars) => bars.map((bar) => bar))}
      </div> */}
    </>
  );
};

export default ArrayElements;
