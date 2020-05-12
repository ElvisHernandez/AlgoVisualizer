import React from "react";
import {
  jsxComparator,
  animateArray,
  sleep,
  updateGlobal,
  color,
} from "../helpers/helpers";

let globalMergeSortArray: JSX.Element[] = [];
let globalDelay = 0;

export function setGlobalMergeSortDelay(delay: number) {
  globalDelay = delay;
}

export function setGlobalMergeSortArray(sourceArray: JSX.Element[]): void {
  globalMergeSortArray = sourceArray;
}

async function animateAndUpdate(
  mergedArray: JSX.Element[],
  maI: number,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
): Promise<void> {
  if (globalDelay !== 0) {
    animateArray(
      globalMergeSortArray,
      mergedArray[maI - 1],
      setSourceArray,
      color.RED
    );
    await sleep(globalDelay);
    updateGlobal(globalMergeSortArray, mergedArray);
    setSourceArray(globalMergeSortArray);
  }
}

async function animate(
  arrayElement: JSX.Element,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  colorCode: color
) {
  if (globalDelay !== 0) {
    await sleep(globalDelay);
    animateArray(globalMergeSortArray, arrayElement, setSourceArray, colorCode);
  }
}

export async function mergeHalves(
  la: JSX.Element[],
  ra: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
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
    maI++;
    await animateAndUpdate(mergedArray, maI, setSourceArray);
  }
  while (laI < la.length) {
    mergedArray[maI] = la[laI];
    laI++;
    maI++;
    await animateAndUpdate(mergedArray, maI, setSourceArray);
  }
  while (raI < ra.length) {
    mergedArray[maI] = ra[raI];
    raI++;
    maI++;
    await animateAndUpdate(mergedArray, maI, setSourceArray);
  }
  return mergedArray;
}

export async function mergeSort(
  sourceArray: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> {
  const len = sourceArray.length;
  if (len === 1) return;
  const mid = Math.floor(len / 2);

  let la: JSX.Element[] = [];
  for (let i = 0; i < mid; i++) {
    la[i] = sourceArray[i];
    await animate(la[i], setSourceArray, color.GREEN);
  }

  let ra: JSX.Element[] = [];
  for (let i = 0; i < len - mid; i++) {
    ra[i] = sourceArray[i + mid];
    await animate(ra[i], setSourceArray, color.VIOLET);
  }

  await mergeSort(la, setSourceArray, setIsDisabled);
  await mergeSort(ra, setSourceArray, setIsDisabled);
  const mergedArray = await mergeHalves(la, ra, setSourceArray);

  for (let i = 0; i < len; i++) {
    sourceArray[i] = mergedArray[i];
  }

  if (globalDelay === 0) setSourceArray(sourceArray);

  if (len === globalMergeSortArray.length) {
    setIsDisabled(false);
  }
}
