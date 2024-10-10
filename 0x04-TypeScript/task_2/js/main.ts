export interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

export interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

 export class Director implements DirectorInterface {

  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffe break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}
 

export class Teacher implements TeacherInterface {

  workFromHome() {
    return 'Cannot Workfrom home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}


export function createEmployee(salary: (number | string)): (DirectorInterface | TeacherInterface) {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher;
    }
    else { return new Director; }
  }
  return new Director;
 }


 export function isDirector(employee: (Director | Teacher)) {
  return employee instanceof Director;
 }

 export function executeWork(employee: (Director | Teacher)) {
  if (isDirector(employee)) {
   const director = new Director()
   return director.workDirectorTasks();
  } 
  const teacher = new Teacher()
  return teacher.workTeacherTasks();
 }

export type Subjects = 'Math' | 'History';
export function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }

  return  'Teaching History';
}
