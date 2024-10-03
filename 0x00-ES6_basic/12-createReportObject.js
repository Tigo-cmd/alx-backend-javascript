export default function createReportObject(employeesList) {
  const employeesData = {
    allEmployees: employeesList,
    getNumberOfDepartments(...employeesList) {
      return employeesList.length + 1;
    },
  };

  return employeesData;
}
