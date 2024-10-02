export default function concatArrays(array1, array2, string) {
  const concatedArray = [...array1, ...array2, ...string];
  return concatedArray;
}
