const Employee = require("../lib/Intern");

describe("Intern", () => {
    it("Should return object containing a 'name', 'id' 'email' and 'School' property when added new object", () => {
        const obj = new Employee("Chris", 10, "besttacoonline@hotmail.com", "School");
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("school" in obj).toEqual(true);
    })
    
})