const Engineer = require("../lib/Engineer");
const { expectToBe, expectString, expectNum } = require('../utils/testHelper');
describe("Engineer should have the following...", () => {
    const engineer = new Engineer('Chris Abiva', 10, 'chrisabiva@hotmail.com', 'chabivz');
    
    test('create an Engineer object', () => {
        expectToBe(engineer.name, 'Chris Abiva');
        expectNum(engineer.id);
        expectToBe(engineer.email, 'chrisabiva@hotmail.com');
        expectToBe(engineer.github, 'chabivz');
         
    });

    test('Get engineer name ', () => {
        expectString(engineer.getName(), engineer.name);
    });

    test('Get engineer new id ', () => {
        expectNum(engineer.getId(), `${engineer.id}`);
    });
    
    test('Get engineer new email ', () => {
        expectString(engineer.getEmail(), engineer.email);
    });

    test('Get engineer new github ', () => {
    expectString(engineer.getGithub(), engineer.github);
    });
})