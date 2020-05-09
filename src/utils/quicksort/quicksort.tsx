import * as React from "react";
// import ArrayElement, { ArrayElementProps } from '../../components/ArrayElement/ArrayElement'
import { jsxComparator, sleep, animateArray, color } from "../helpers/helpers";

let globalQuickSortArray: JSX.Element[] = [];

let globalDelay = 0;

export function setGlobalQuickSortDelay(delay: number) {
  globalDelay = delay;
}

export function setGlobalQuickSortArray(sourceArray: JSX.Element[]): void {
  globalQuickSortArray = sourceArray;
}

async function swap(
  array: JSX.Element[],
  index1: number,
  index2: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
): Promise<void> {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  await sleep(10);
  setSourceArray(array);
  //   await sleep(globalDelay);
  //   animateArray(
  //     globalQuickSortArray,
  //     array[index1],
  //     setSourceArray,
  //     color.GREEN
  //   );
  //   animateArray(
  //     globalQuickSortArray,
  //     array[index2],
  //     setSourceArray,
  //     color.VIOLET
  //   );
}

async function partition(
  array: JSX.Element[],
  start: number,
  end: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) {
  let pivot = array[end];
  await sleep(10);
  animateArray(globalQuickSortArray, pivot, setSourceArray, color.RED);
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (jsxComparator(array[i], pivot) <= 0) {
      await swap(array, i, pIndex, setSourceArray);
      pIndex++;
      //   await sleep(10);
      //   setSourceArray(globalQuickSortArray);
    }
  }
  await swap(array, pIndex, end, setSourceArray);
  await sleep(10);
  animateArray(globalQuickSortArray, pivot, setSourceArray, color.BLUE);
  setSourceArray(array);
  return pIndex;
}

export async function quicksort(
  array: JSX.Element[],
  start: number,
  end: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) {
  //   setSourceArray(array);
  if (start >= end) return;
  const pIndex = await partition(array, start, end, setSourceArray);
  for (let i = start; i < pIndex; i++) {
    await sleep(10);
    animateArray(globalQuickSortArray, array[i], setSourceArray, color.GREEN);
  }
  await quicksort(array, start, pIndex - 1, setSourceArray);
  for (let i = start; i < pIndex; i++) {
    await sleep(10);
    animateArray(globalQuickSortArray, array[i], setSourceArray, color.BLUE);
  }
  for (let i = pIndex + 1; i <= end; i++) {
    await sleep(10);
    animateArray(globalQuickSortArray, array[i], setSourceArray, color.VIOLET);
  }
  await quicksort(array, pIndex + 1, end, setSourceArray);
  for (let i = pIndex + 1; i <= end; i++) {
    await sleep(10);
    animateArray(globalQuickSortArray, array[i], setSourceArray, color.BLUE);
  }
}
