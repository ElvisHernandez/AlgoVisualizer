import * as React from "react";
// import ArrayElement, { ArrayElementProps } from '../../components/ArrayElement/ArrayElement'
import {
  jsxComparator,
  sleep,
  animateArray,
  updateGlobal,
  color,
} from "../helpers/helpers";

let globalQuickSortArray: JSX.Element[] = [];

let globalDelay = 0;

export function setGlobalQuickSortDelay(delay: number) {
  globalDelay = delay;
}

export function setGlobalQuickSortArray(sourceArray: JSX.Element[]): void {
  globalQuickSortArray = sourceArray;
}

function swap(array: JSX.Element[], index1: number, index2: number): void {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

async function partition(
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
      animateArray(globalQuickSortArray, array[i], setSourceArray, color.GREEN);
      animateArray(
        globalQuickSortArray,
        array[pIndex],
        setSourceArray,
        color.VIOLET
      );
      await sleep(10);
      await updateGlobal(globalQuickSortArray, array);
      setSourceArray(globalQuickSortArray);
    }
  }
  swap(array, pIndex, end);
  //   setSourceArray(array);
  return pIndex;
}

export async function quicksort(
  array: JSX.Element[],
  start: number,
  end: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) {
  //   await setSourceArray(array);
  if (start >= end) return;
  const pIndex = await partition(array, start, end, setSourceArray);
  await quicksort(array, start, pIndex - 1, setSourceArray);
  await quicksort(array, pIndex + 1, end, setSourceArray);
}
