export function findIndex(array, test) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (test(array[i])) {
      return i;
    }
  }

  return -1;
}
