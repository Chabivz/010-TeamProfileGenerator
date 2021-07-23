const Manager = require("../lib/Manager");
const { expectToBe, expectString, expectNum } = require('../utils/testHelper');
describe("manager should have the following...", () => {
    const manager = new Manager('John Cena', 50, 'JohnCena@cantsee.me', 1);
    
    test('create an manager object', () => {
        expectToBe(manager.name, 'John Cena');
        expectNum(manager.id);
        expectToBe(manager.email, 'JohnCena@cantsee.me');
        expectNum(manager.officeNumber);
         
    });

    test('Get manager name ', () => {
        expectString(manager.getName(), manager.name);
    });

    test('Get manager new id ', () => {
        expectNum(manager.getId(), `${manager.id}`);
    });
    
    test('Get manager new email ', () => {
        expectString(manager.getEmail(), manager.email);
    });

    test('Get manager new officeNumber ', () => {
    expectNum(manager.getOfficeNumber(), manager.officeNumber);
    });
})