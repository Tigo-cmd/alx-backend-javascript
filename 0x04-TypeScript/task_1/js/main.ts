export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [randon:string]: any;
}

export interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

export interface studentClass {
  workOnHomework(): string;
  displayName(): string;
}

export interface studentClassSonctructor {
  new (firstName: string, lastName: string): studentClass
}

 export interface Directors extends Teacher {
  numberOfReports: number;
 }


 export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
 }

 export class StudentClass implements studentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently Working';
  }

  displayName() {
    return this._firstName;
  }
 }
 