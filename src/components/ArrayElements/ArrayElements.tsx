import React, { useState } from "react";
import styles from "./ArrayElements.module.css";
import ArrayElement from "../ArrayElement/ArrayElement";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  //   const [array, setArray] = useState<number[]>([]);
  //   const color = "red";

  function makeArray(bars: number): JSX.Element[] {
    const currentArray = [];

    for (let i = 0; i < bars; i++) {
      const height = Math.floor(Math.random() * 691 + 10);
      currentArray.push(
        <ArrayElement background="teal" width="5px" height={height + "px"} />
      );
    }
    return currentArray;
  }

  return <div className={styles.bars}>{makeArray(100).map((bar) => bar)}</div>;
};

export default ArrayElements;
