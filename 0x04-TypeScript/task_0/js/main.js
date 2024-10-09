"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
// student instance of Students
var student1 = {
    firstName: 'emmanuel',
    lastName: 'chika',
    age: 56,
    location: 'china',
};
var student2 = {
    firstName: 'nuel',
    lastName: 'Tigo',
    age: 24,
    location: 'canada',
};
var studentsList = [
    student1,
    student2,
];
var renderTable = function (studentsList) {
    // create table tag
    var table = document.createElement('table');
    var headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);
    // insert headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
    for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
        var student = studentsList_1[_i];
        var studentRow = document.createElement('tr');
        studentRow.insertAdjacentHTML('beforeend', "<td>".concat(student.firstName, "</td>"));
        studentRow.insertAdjacentHTML('beforeend', "<td>".concat(student.location, "</td>"));
        table.insertAdjacentElement('beforeend', studentRow);
    }
    document.body.insertAdjacentElement('beforeend', table);
};
exports.renderTable = renderTable;
(0, exports.renderTable)(studentsList);
