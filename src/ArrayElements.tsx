import React, { useState } from "react";
import styles from "./ArrayElements.module.css";
import ArrayElement from "./ArrayElement";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  //   const [array, setArray] = useState<number[]>([]);
  const color = "red";

  function makeArray(bars: number): number[] {
    const currentArray = [];

    for (let i = 0; i < bars; i++) {
      const height = Math.floor(Math.random() * 691 + 10);
      currentArray.push(height);
    }
    return currentArray;
  }

  return (
    <div className={styles.bars}>
      <ArrayElement background="teal" width="5px" height={10 + "px"} />
    </div>
  );
};

export default ArrayElements;
