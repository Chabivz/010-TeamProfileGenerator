const Employee = require("../lib/Engineer");

describe("Engineer", () => {
    it("Engineer has 'name', 'id', 'email', 'github'", () => {
        const obj = new Employee("Chris", 10, "besttacoonline@hotmail.com", "Github");
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("github" in obj).toEqual(true);
    })
})