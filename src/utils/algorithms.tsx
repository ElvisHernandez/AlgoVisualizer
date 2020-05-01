import React from "react";

import ArrayElement, {
  ArrayElementProps,
} from "../components/ArrayElement/ArrayElement";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function testSort(): void {
//   for (let i = 0; i < 1000; i++) {
//     const array = makeArray(100);
//     const copy1 = array.slice();
//     const copy2 = array.slice();

//     mergeSort(copy1);
//     copy2.sort((a, b) => a - b);

//     console.log(compareArrays(copy1, copy2));
//   }
// }

async function mergeHalves(
  la: JSX.Element[],
  ra: JSX.Element[]
): Promise<JSX.Element[]> {
  // await sleep(100);
  let mergedArray: JSX.Element[] = [];
  let [laI, raI, maI] = [0, 0, 0]; // left, right, and merged array indices
  while (laI < la.length && raI < ra.length) {
    if (jsxComparator(la[laI], ra[raI])) {
      mergedArray[maI] = la[laI];
      laI++;
    } else {
      mergedArray[maI] = ra[raI];
      raI++;
    }
    maI++;
  }
  while (laI < la.length) {
    mergedArray[maI] = la[laI];
    laI++;
    maI++;
  }
  while (raI < ra.length) {
    mergedArray[maI] = ra[raI];
    raI++;
    maI++;
  }
  return mergedArray;
}

let globalArray: JSX.Element[] = [];

export function setGlobalArray(sourceArray: JSX.Element[]): void {
  globalArray = sourceArray;
}

export async function mergeSort(
  sourceArray: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
): Promise<void> {
  const len = sourceArray.length;
  if (len === 1) return;
  const mid = Math.floor(len / 2);
  let la: JSX.Element[] = [];
  for (let i = 0; i < mid; i++) {
    la[i] = sourceArray[i];
    // console.log(i);
    await sleep(10);
    await animateArray(sourceArray, setSourceArray, i, true);
  }

  let ra: JSX.Element[] = [];
  for (let i = 0; i < len - mid; i++) {
    ra[i] = sourceArray[i + mid];
    // console.log(i);
    await sleep(10);
    await animateArray(sourceArray, setSourceArray, i + mid, false);
  }

  await mergeSort(la, setSourceArray);
  await mergeSort(ra, setSourceArray);
  const mergedArray = await mergeHalves(la, ra);

  for (let i = 0; i < len; i++) {
    sourceArray[i] = mergedArray[i];
  }

  updateGlobal(sourceArray);

  await sleep(100);
  await setSourceArray(globalArray);
  // console.log(copy);
}

function updateGlobal(sourceArray: JSX.Element[]): void {
  let temp = globalArray.slice();

  let indices: number[] = [];

  sourceArray.forEach((element1) => {
    temp.forEach((element2: any, i: number) =>
      element1.key === element2.key ? indices.push(i) : undefined
    );
  });

  indices.sort((a: number, b: number) => a - b);

  sourceArray.forEach((element, i) => {
    temp[indices[i]] = element;
  });
  globalArray = temp;
}

function animateArray(
  sourceArray: JSX.Element[],
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  i: number,
  isLeft: boolean
) {
  setSourceArray((prev: JSX.Element[]) => {
    const next = [...prev];
    const id = sourceArray[i].key;
    // console.log("this is the id: ", id);

    const index = globalArray.findIndex((jsxEl: any) => jsxEl.key === id);

    // console.log("this is the index: ", index);
    next[index] = (
      <ArrayElement
        key={next[index].key!}
        background={isLeft ? "#1eea51" : "#d85bff"}
        width="10px"
        height={next[index].props.height}
      />
    );
    globalArray = next;
    return next;
  });
}

export function compareArrays(array1: number[], array2: number[]): boolean {
  const len1 = array1.length;
  const len2 = array2.length;
  if (len1 !== len2) return false;

  for (let i = 0; i < len1; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

function jsxComparator(element1: JSX.Element, element2: JSX.Element): boolean {
  const height1: number = +Object.values(element1)[4].height.slice(0, -2);
  const height2: number = +Object.values(element2)[4].height.slice(0, -2);

  return height1 - height2 < 0 ? true : false;
}
