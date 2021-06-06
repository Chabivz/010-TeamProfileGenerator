const Employee = require("../lib/Employee");

describe("Manager", () => {
    it("Has an Office Number", () => {
        const obj = new Employee("Chris", 10, "besttacoonline@hotmail.com");
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("officeNumber" in obj).toEqual(true);
    })
})