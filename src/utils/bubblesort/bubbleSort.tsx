import { jsxComparator } from "../helpers/helpers";

function swap(arr: JSX.Element[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function bubbleSort(
  arr: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (jsxComparator(arr[i], arr[j]) < 0) swap(arr, i, j);
    }
  }
}
