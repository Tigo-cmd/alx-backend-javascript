/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  if (!newGrades.grades) {
    newGrades.grades = 'N/A';
  }
  const student = students.filter((students) => students.location === city);
  const grades = student.map((student) => {
    for (const i of newGrades) {
      if (student.id === i.studentId) {
        student.grade = i.grade;
      }
    }
    if (student.grade === undefined) {
      student.grade = 'N/A';
    }
    return student;
  });

  return grades;
}
