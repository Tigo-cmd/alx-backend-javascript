export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const items of map.keys()) {
    if (map.get(items) === 1) {
      map.set(items, 100);
    }
  }
}
