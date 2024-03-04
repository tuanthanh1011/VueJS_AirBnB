export const createArrayNumber = (start, end) => {
  const array = [];
  for (let index = start; index < end + 1; index++) {
    array.push(index);
  }
  return array;
};
