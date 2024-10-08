export default function getStudentIdsSum(students) {
  if (!(students instanceof Array)) {
    return [];
  }

  const studentsid = students.map((students) => students.id);
  const initialValue = 0;
  return studentsid.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}
