import React, { useState } from "react";
import styles from "./ArrayElements.module.css";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  const [array, setArray] = useState<number[]>([]);

  function makeArray(bars: number): number[] {
    const currentArray = [];

    for (let i = 0; i < bars; i++) {
      const height = Math.floor(Math.random() * 991 + 10);
      currentArray.push(height);
    }
    return currentArray;
  }

  return (
    <div className={styles.bars}>
      {makeArray(100).map((num) => (
        <div style={{ width: "5px", height: num, background: "red" }}></div>
      ))}
    </div>
  );
};

export default ArrayElements;
