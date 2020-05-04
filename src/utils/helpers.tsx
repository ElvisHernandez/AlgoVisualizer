import * as React from "react";
import ArrayElement from "../components/ArrayElement/ArrayElement";

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export enum color {
  RED,
  GREEN,
  VIOLET,
}

function makeJSXArray(divCount: number, heightRange: number): JSX.Element[] {
  const currentArray = [];
  for (let i = 0; i < divCount; i++) {
    const height = Math.floor(Math.random() * heightRange + 5);
    currentArray.push(
      <ArrayElement
        key={i}
        background="#00e5ff"
        width="5px"
        height={height + "px"}
      />
    );
  }
  return currentArray;
}
export async function updateGlobal(
  globalArray: JSX.Element[],
  sourceArray: JSX.Element[]
): Promise<void> {
  //   let temp = globalArray.slice();
  let sourceObject: any = {};

  sourceArray.forEach((el) => {
    const elKey = el.key;
    if (elKey) sourceObject[elKey] = elKey;
  });

  let indices: number[] = [];

  globalArray.forEach((el, i) => {
    const elKey: any = el.key;
    if (sourceObject[elKey]) indices.push(i);
  });

  for (let i = 0; i < sourceArray.length; i++) {
    globalArray[indices[i]] = sourceArray[i];
  }
  //   globalArray = temp;
}

export function animateArray(
  globalArray: JSX.Element[],
  sourceArray: JSX.Element,
  setSourceArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
  colorCode: color
) {
  setSourceArray((prev: JSX.Element[]) => {
    const next = [...prev];
    const id = sourceArray.key;
    const index = globalArray.findIndex((jsxEl: any) => jsxEl.key === id);
    let hex;

    switch (colorCode) {
      case color.RED:
        hex = "#f95977";
        break;
      case color.GREEN:
        hex = "#1eea51";
        break;
      case color.VIOLET:
        hex = "#d85bff";
        break;
      default:
        hex = "blue";
    }

    next[index] = (
      <ArrayElement
        key={next[index].key!}
        background={hex}
        width="5px"
        height={next[index].props.height}
      />
    );

    for (let i = 0; i < next.length; i++) {
      globalArray[i] = next[i];
    }
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

export function jsxComparator(
  element1: JSX.Element,
  element2: JSX.Element
): boolean {
  const height1: number = +Object.values(element1)[4].height.slice(0, -2);
  const height2: number = +Object.values(element2)[4].height.slice(0, -2);
  return height1 - height2 < 0 ? true : false;
}

// export function testSort(): void {
//   for (let i = 0; i < 1000; i++) {
// const array = makeArray(100);
// const copy1 = array.slice();
// const copy2 = array.slice();
//
// mergeSort(copy1);
// copy2.sort((a, b) => a - b);
//
// console.log(compareArrays(copy1, copy2));
//   }
// }
