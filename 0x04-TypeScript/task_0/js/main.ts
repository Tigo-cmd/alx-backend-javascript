// Student Interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// student instance of Students
const student1: Student = {
  firstName: 'emmanuel',
  lastName: 'chika',
  age: 56,
  location: 'china',
}

const student2: Student = {
  firstName: 'nuel',
  lastName: 'Tigo',
  age: 24,
  location: 'canada',
}

const studentsList: Array<Student> = [
  student1,
  student2,
]


export const renderTable = (studentsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
