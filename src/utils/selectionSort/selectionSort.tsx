import * as React from "react";
import { jsxComparator, animateArray, color, sleep } from "../helpers/helpers";

let globalDelay = 0;

export function setGlobalSelectionSortDelay(delay: number) {
  globalDelay = delay;
}

async function swap(
  array: JSX.Element[],
  i: number,
  j: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) {
  if (globalDelay !== 0) {
    await animateArray(array, array[i], setSourceArray, color.GREEN);
    await animateArray(array, array[j], setSourceArray, color.VIOLET);
    setSourceArray(array);
  }
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  if (globalDelay !== 0) {
    await sleep(globalDelay);
    await animateArray(array, array[i], setSourceArray, color.BLUE);
    await animateArray(array, array[j], setSourceArray, color.BLUE);
  }
  setSourceArray(array);
}

export async function selectionSort(
  array: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
) {
  for (let i = 0; i < array.length; i++) {
    let minInd = i;
    for (let j = i + 1; j < array.length; j++) {
      if (jsxComparator(array[j], array[minInd]) < 0) minInd = j;
      if (globalDelay !== 0) {
        await animateArray(array, array[j], setSourceArray, color.RED);
        await sleep(globalDelay);
        await animateArray(array, array[j], setSourceArray, color.BLUE);
        setSourceArray(array);
      }
    }
    await swap(array, i, minInd, setSourceArray);
  }
  setIsDisabled(false);
}
