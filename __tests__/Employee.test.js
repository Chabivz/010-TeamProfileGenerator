const Employee = require("../lib/Employee");
const { expectToBe, expectString, expectNum } = require('../utils/testHelper');
describe("employee should have the following...", () => {
    const employee = new Employee('Undertaker', 999, 'Helena@MCR.me');
    
    test('create an employee object', () => {
        expectToBe(employee.name, 'Undertaker');
        expectNum(employee.id);
        expectToBe(employee.email, 'Helena@MCR.me');
         
    });

    test('Get employee name ', () => {
        expectString(employee.getName(), employee.name);
    });

    test('Get employee new id ', () => {
        expectNum(employee.getId(), `${employee.id}`);
    });
    
    test('Get employee new email ', () => {
        expectString(employee.getEmail(), employee.email);
    });
})