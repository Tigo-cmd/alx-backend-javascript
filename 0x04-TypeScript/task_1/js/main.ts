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

 export interface Directors extends Teacher {
  numberOfReports: number;
 }


 export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
 }