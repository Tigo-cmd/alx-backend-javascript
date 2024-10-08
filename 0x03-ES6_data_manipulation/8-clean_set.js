export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const strLen = startString.length;
  const str = [];
  for (const i of set.values()) {
    if (i.includes(startString)) {
      str.push(i.slice(strLen));
    }
  }
  // eslint-disable-next-line consistent-return
  return str.join('-');
}
