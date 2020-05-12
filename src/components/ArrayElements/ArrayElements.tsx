import React, { useState, useEffect } from "react";
import styles from "./ArrayElements.module.css";
import { makeJSXArray } from "../../utils/helpers/helpers";
import MergeSortButton from "../MergeSortButton/MergeSortButton";
import QuickSortButton from "../QuickSortButton/QuickSortButton";
import BubbleSortButton from "../BubbleSortButton/BubbleSortButton";
import SelectionSortButton from "../SelectionSortButton/SelectionSortButton";
import InsertionSortButton from "../InsertionSortButton/InsertionSortButton";
import SpeedSlider from "../SpeedSlider/SpeedSlider";

export interface ArrayElementsProps {
  defaultDelay: number;
}

const ArrayElements: React.FC<ArrayElementsProps> = ({ defaultDelay }) => {
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [delay, setDelay] = useState(defaultDelay);

  useEffect(() => {
    makeArray();
  }, []);

  function makeArray(): void {
    const currentArray = makeJSXArray(100, 1091);
    setIsSorted(false);
    setSourceArray(currentArray);
  }

  const sortingProps = {
    sourceArray,
    setSourceArray,
    isSorted,
    setIsSorted,
    setIsDisabled,
    delay,
  };

  return (
    <div data-testid="array-elements" className={styles.content}>
      <div>
        <button
          className="btn btn-dark"
          onClick={makeArray}
          disabled={isDisabled}
        >
          Make Array
        </button>
        <MergeSortButton {...sortingProps} name="MergeSort" />
        <QuickSortButton {...sortingProps} name="QuickSort" />
        <BubbleSortButton {...sortingProps} name="BubbleSort" />
        <SelectionSortButton {...sortingProps} name="SelectionSort" />
        <InsertionSortButton {...sortingProps} name="InsertionSort" />
        <SpeedSlider delay={delay} setDelay={setDelay} />
      </div>
      <div className={styles.bars}>{sourceArray.map((bar) => bar)}</div>
    </div>
  );
};

export default ArrayElements;
