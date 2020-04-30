import { ArrayElementProps } from "../components/ArrayElement/ArrayElement";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mergeHalves(
  la: JSX.Element[],
  ra: JSX.Element[],
  setArray: any
) {
  await sleep(100);
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

export async function mergeSort(array: JSX.Element[], setArray: any) {
  const len = array.length;
  if (len <= 1) return;
  const mid = Math.floor(len / 2);
  let la = array.slice(0, mid);
  let ra = array.slice(mid, len);

  await mergeSort(la, setArray);
  await mergeSort(ra, setArray);
  const mergedArray = await mergeHalves(la, ra, setArray);

  for (let i = 0; i < len; i++) {
    array[i] = mergedArray[i];
  }
  await sleep(1000);
  await setArray(array);
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
