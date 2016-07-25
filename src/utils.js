export const range = (start, end) => (
  Array.from({ length: end - start + 1 }, (x, i) => i + start)
);
