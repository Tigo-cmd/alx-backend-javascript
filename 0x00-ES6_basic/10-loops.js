export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const idx of array) {
    const value = idx;
    // eslint-disable-next-line no-param-reassign
    array[i] = appendString + value;
    i += 1;
  }
  return array;
}
