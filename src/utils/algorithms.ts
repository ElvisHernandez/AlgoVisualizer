function mergeHalves(
  la: number[],
  ra: number[],
  setArray: React.Dispatch<React.SetStateAction<number[][]>>
): number[] {
  let mergedArray: number[] = [];
  let [laI, raI, maI] = [0, 0, 0]; // left, right, and merged array indices
  while (laI < la.length && raI < ra.length) {
    if (la[laI] < ra[raI]) {
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

export function mergeSort(
  array: number[],
  setMultiArray: React.Dispatch<React.SetStateAction<number[][]>>
): void {
  setMultiArray((prev: any) => [...prev, array]);
  const len = array.length;
  if (len <= 1) return;
  const mid = Math.floor(len / 2);
  let la = array.slice(0, mid);
  let ra = array.slice(mid, len);

  // setMultiArray((prev: any) => [...prev, array]);
  mergeSort(la, setMultiArray);
  mergeSort(ra, setMultiArray);
  const mergedArray = mergeHalves(la, ra, setMultiArray);

  for (let i = 0; i < len; i++) {
    array[i] = mergedArray[i];
  }
  //  setMultiArray((prev: any) => [...prev, array]);
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
