function swap(array: number[], index1: number, index2: number): void {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function partition(array: number[], start: number, end: number) {
  let pivot = array[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, pIndex);
      pIndex++;
    }
  }
  swap(array, pIndex, end);
  return pIndex;
}

export function quicksort(array: number[], start: number, end: number) {
  if (start >= end) return;
  const pIndex = partition(array, start, end);
  quicksort(array, start, pIndex - 1);
  quicksort(array, pIndex + 1, end);
}
