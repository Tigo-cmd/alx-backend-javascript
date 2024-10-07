export default function getListStudentIds(objArray) {
  if (!Array.isArray(objArray)) {
    return [];
  }
  const ids = objArray.map((objArray) => objArray.id)

  return ids;
}
