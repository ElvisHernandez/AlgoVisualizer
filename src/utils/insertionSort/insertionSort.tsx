import * as React from "react";
import { jsxComparator, animateArray, color, sleep } from "../helpers/helpers";

let globalDelay = 0;

export function setGlobalInsertionSortDelay(delay: number) {
  globalDelay = delay;
}

export async function insertionSort(
  array: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
) {
  for (let i = 1; i < array.length; i++) {
    let unsortedElement = array[i];
    let j = i - 1;
    await animateArray(array, array[j], setSourceArray, color.GREEN);
    setSourceArray(array);
    while (j >= 0 && jsxComparator(array[j], unsortedElement) > 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = unsortedElement;
    for (let k = j + 1; k <= i; k++) {
      await animateArray(array, array[k], setSourceArray, color.VIOLET);
      await sleep(0);
      await animateArray(array, array[k], setSourceArray, color.BLUE);
      setSourceArray(array);
    }
  }
  //   setSourceArray(array);
  setIsDisabled(false);
}
