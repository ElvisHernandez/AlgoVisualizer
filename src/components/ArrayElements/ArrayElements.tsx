import React, { useState, useEffect, useImperativeHandle } from "react";
import styles from "./ArrayElements.module.css";
import { makeJSXArray } from "../../utils/helpers/helpers";
import MergeSortButton from "../MergeSortButton/MergeSortButton";
import QuickSortButton from "../QuickSortButton/QuickSortButton";
import BubbleSortButton from "../BubbleSortButton/BubbleSortButton";
import SelectionSortButton from "../SelectionSortButton/SelectionSortButton";
import InsertionSortButton from "../InsertionSortButton/InsertionSortButton";
import SpeedSlider from "../SpeedSlider/SpeedSlider";
import DivCountSlider from "../DivCountSlider/DivCountSlider";
import DivLengthSlider from "../DivLengthSlider/DivLengthSlider";

export interface ArrayElementsProps {
  defaultDelay: number;
  defaultDivCount: number;
  defaultDivLength: number;
}

const ArrayElements: React.FC<ArrayElementsProps> = ({
  defaultDelay,
  defaultDivCount,
  defaultDivLength,
}) => {
  const [sourceArray, setSourceArray] = useState<JSX.Element[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [delay, setDelay] = useState(defaultDelay);
  const [divCount, setDivCount] = useState(defaultDivCount);
  const [divLength, setDivLength] = useState(defaultDivLength);

  useEffect(() => {
    makeArray(divCount, divLength);
  }, []);

  function makeArray(divCount: number, divLength: number): void {
    const currentArray = makeJSXArray(divCount, divLength);
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
      <div className={styles.controls}>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}
        >
          <SpeedSlider delay={delay} setDelay={setDelay} />
          <DivCountSlider
            makeArray={makeArray}
            defaultDivCount={defaultDivCount}
            divLength={divLength}
            divCount={divCount}
            setDivCount={setDivCount}
          />
          <DivLengthSlider
            makeArray={makeArray}
            defaultDivLength={defaultDivLength}
            divCount={divCount}
            divLength={divLength}
            setDivLength={setDivLength}
          />
        </div>
        <button
          className="btn btn-dark"
          onClick={() => makeArray(divCount, divLength)}
          disabled={isDisabled}
        >
          Make Array
        </button>
        <MergeSortButton {...sortingProps} name="MergeSort" />
        <QuickSortButton {...sortingProps} name="QuickSort" />
        <BubbleSortButton {...sortingProps} name="BubbleSort" />
        <SelectionSortButton {...sortingProps} name="SelectionSort" />
        <InsertionSortButton {...sortingProps} name="InsertionSort" />
      </div>
      <div className={styles.bars}>{sourceArray.map((bar) => bar)}</div>
    </div>
  );
};

export default ArrayElements;
