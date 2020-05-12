import * as React from "react";
import { jsxComparator, sleep, animateArray, color } from "../helpers/helpers";

let globalDelay = 0;

export function setGlobalQuickSortDelay(delay: number) {
  globalDelay = delay;
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
  if (globalDelay !== 0) {
    await sleep(globalDelay);
    animateArray(array, array[index1], setSourceArray, color.BLUE);
    animateArray(array, array[index2], setSourceArray, color.BLUE);
  }
}

async function partition(
  array: JSX.Element[],
  start: number,
  end: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
): Promise<number> {
  let pivot = array[end];
  if (globalDelay !== 0) {
    await animateArray(array, pivot, setSourceArray, color.RED);
  }
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (jsxComparator(array[i], pivot) <= 0) {
      await swap(array, i, pIndex, setSourceArray);
      pIndex++;
    }
    setSourceArray(array);
  }
  await swap(array, pIndex, end, setSourceArray);
  await animateArray(array, pivot, setSourceArray, color.BLUE);
  return pIndex;
}

export async function quicksort(
  array: JSX.Element[],
  start: number,
  end: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> {
  if (start >= end) return;
  const pIndex = await partition(array, start, end, setSourceArray);
  if (globalDelay !== 0) {
    for (let i = start; i < pIndex; i++) {
      await sleep(globalDelay);
      animateArray(array, array[i], setSourceArray, color.GREEN);
    }
  }
  await quicksort(array, start, pIndex - 1, setSourceArray, setIsDisabled);
  if (globalDelay !== 0) {
    for (let i = start; i < pIndex; i++) {
      await sleep(globalDelay);
      animateArray(array, array[i], setSourceArray, color.BLUE);
    }
    for (let i = pIndex + 1; i <= end; i++) {
      await sleep(globalDelay);
      animateArray(array, array[i], setSourceArray, color.VIOLET);
    }
  }
  await quicksort(array, pIndex + 1, end, setSourceArray, setIsDisabled);
  if (globalDelay !== 0) {
    for (let i = pIndex + 1; i <= end; i++) {
      await sleep(globalDelay);
      animateArray(array, array[i], setSourceArray, color.BLUE);
    }
  }
  if (start === 0 && end === array.length - 1) {
    setIsDisabled(false);
  }
}
