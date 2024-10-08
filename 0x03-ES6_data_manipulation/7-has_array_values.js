export default function hasValuesFromArray(set, array) {
  const newArray = new Set(array);
  return newArray.isSubsetOf(set);
}
