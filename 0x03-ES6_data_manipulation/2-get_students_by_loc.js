export default function getStudentsByLocation(listOFStudents, city) {
  if (!Array.isArray(listOFStudents)) {
    return [];
  }
  return listOFStudents.filter((listOFStudents) => listOFStudents.location === city);
}
