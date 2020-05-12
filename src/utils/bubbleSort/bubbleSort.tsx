import { jsxComparator, animateArray, color, sleep } from "../helpers/helpers";

let globalDelay = 0;

export function setGlobalBubbleSortDelay(delay: number) {
  globalDelay = delay;
}

async function swap(
  arr: JSX.Element[],
  i: number,
  j: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
): Promise<void> {
  if (globalDelay !== 0) {
    await animateArray(arr, arr[i], setSourceArray, color.GREEN);
    await animateArray(arr, arr[j], setSourceArray, color.VIOLET);
    setSourceArray(arr);
  }
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  if (globalDelay !== 0) {
    await sleep(globalDelay);
    await animateArray(arr, arr[i], setSourceArray, color.BLUE);
    await animateArray(arr, arr[j], setSourceArray, color.BLUE);
  }
  setSourceArray(arr);
}

export async function bubbleSort(
  arr: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> {
  let swapCounter = -1;

  while (swapCounter !== 0) {
    swapCounter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (jsxComparator(arr[i], arr[i + 1]) > 0) {
        await swap(arr, i, i + 1, setSourceArray);
        swapCounter++;
      }
    }
  }
  setIsDisabled(false);
}
