const Intern = require("../lib/Intern");
const { expectToBe, expectString, expectNum } = require('../utils/testHelper');
describe("intern should have the following...", () => {
    const intern = new Intern('Dwayne Johnson', 30, 'DwayneJohnson@TheRock.com', 'WWE');
    
    test('create an intern object', () => {
        expectToBe(intern.name, 'Dwayne Johnson');
        expectNum(intern.id);
        expectToBe(intern.email, 'DwayneJohnson@TheRock.com');
        expectToBe(intern.school, 'WWE');
         
    });

    test('Get intern name ', () => {
        expectString(intern.getName(), intern.name);
    });

    test('Get intern new id ', () => {
        expectNum(intern.getId(), `${intern.id}`);
    });
    
    test('Get intern new email ', () => {
        expectString(intern.getEmail(), intern.email);
    });

    test('Get intern new school ', () => {
    expectString(intern.getSchool(), intern.school);
    });
})