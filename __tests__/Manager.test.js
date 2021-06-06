const Employee = require("../lib/Manager");

describe("Manager", () => {
    it("Should return object containing a 'name', 'id' 'email' and 'officeNumber' property when added new object", () => {
        const obj = new Employee("Chris", 10, "besttacoonline@hotmail.com");
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("officeNumber" in obj).toEqual(true);
    })
})