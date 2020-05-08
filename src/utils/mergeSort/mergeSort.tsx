import React from "react";
import {
  jsxComparator,
  animateArray,
  sleep,
  updateGlobal,
  color,
} from "../helpers/helpers";

let globalMergeSortArray: JSX.Element[] = [];

export function setGlobalMergeSortArray(sourceArray: JSX.Element[]): void {
  globalMergeSortArray = sourceArray;
}

export async function mergeHalves(
  la: JSX.Element[],
  ra: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  delay: number
): Promise<JSX.Element[]> {
  let mergedArray: JSX.Element[] = [];
  let [laI, raI, maI] = [0, 0, 0]; // left, right, and merged array indices
  while (laI < la.length && raI < ra.length) {
    if (jsxComparator(la[laI], ra[raI]) < 0) {
      mergedArray[maI] = la[laI];
      laI++;
    } else {
      mergedArray[maI] = ra[raI];
      raI++;
    }
    animateArray(
      globalMergeSortArray,
      mergedArray[maI],
      setSourceArray,
      color.RED
    );
    maI++;
    await sleep(delay);
    updateGlobal(globalMergeSortArray, mergedArray);
    setSourceArray(globalMergeSortArray);
  }
  while (laI < la.length) {
    mergedArray[maI] = la[laI];
    laI++;
    animateArray(
      globalMergeSortArray,
      mergedArray[maI],
      setSourceArray,
      color.RED
    );
    maI++;
    await sleep(delay);
    updateGlobal(globalMergeSortArray, mergedArray);
    setSourceArray(globalMergeSortArray);
  }
  while (raI < ra.length) {
    mergedArray[maI] = ra[raI];
    raI++;
    animateArray(
      globalMergeSortArray,
      mergedArray[maI],
      setSourceArray,
      color.RED
    );
    maI++;
    await sleep(delay);
    updateGlobal(globalMergeSortArray, mergedArray);
    setSourceArray(globalMergeSortArray);
  }
  return mergedArray;
}

export async function mergeSort(
  sourceArray: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  delay: number
): Promise<void> {
  const len = sourceArray.length;
  if (len === 1) return;
  const mid = Math.floor(len / 2);

  let la: JSX.Element[] = [];
  for (let i = 0; i < mid; i++) {
    la[i] = sourceArray[i];
    await sleep(delay);
    animateArray(globalMergeSortArray, la[i], setSourceArray, color.GREEN);
  }

  let ra: JSX.Element[] = [];
  for (let i = 0; i < len - mid; i++) {
    ra[i] = sourceArray[i + mid];
    await sleep(delay);
    animateArray(globalMergeSortArray, ra[i], setSourceArray, color.VIOLET);
  }

  await mergeSort(la, setSourceArray, delay);
  await mergeSort(ra, setSourceArray, delay);
  const mergedArray = await mergeHalves(la, ra, setSourceArray, delay);

  for (let i = 0; i < len; i++) {
    sourceArray[i] = mergedArray[i];
  }

  if (len === globalMergeSortArray.length) {
    const div: HTMLElement = document.createElement("div");
    div.setAttribute("data-testid", "done-sorting");
    div.hidden = true;
    document.body.appendChild(div);
  }
}
