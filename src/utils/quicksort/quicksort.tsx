import * as React from "react";
// import ArrayElement, { ArrayElementProps } from '../../components/ArrayElement/ArrayElement'
import { jsxComparator } from "../helpers/helpers";

function swap(array: JSX.Element[], index1: number, index2: number): void {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function partition(
  array: JSX.Element[],
  start: number,
  end: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) {
  let pivot = array[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (jsxComparator(array[i], pivot) <= 0) {
      swap(array, i, pIndex);
      pIndex++;
    }
  }
  swap(array, pIndex, end);
  //   setSourceArray(array);
  return pIndex;
}

export function quicksort(
  array: JSX.Element[],
  start: number,
  end: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) {
  if (start >= end) return;
  const pIndex = partition(array, start, end, setSourceArray);
  quicksort(array, start, pIndex - 1, setSourceArray);
  quicksort(array, pIndex + 1, end, setSourceArray);
}
