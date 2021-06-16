const Manager = require ("../lib/Manager.js");
test("testing for office number", () => {
    let employeeOne = new Manager("Sam", 3, "sam@gmail.com", 12);
    expect(employeeOne.getOfficeNumber()).toBe(12)
} );

test("testing for role", () => {
    let employeeOne = new Manager ("Sam", 3, "sam@gmail.com", 12);
    expect(employeeOne.getRole()).toBe("Manager")
} );

test("testing for name", () => {
    let employeeOne = new Manager("Sam", 3, "sam@gmail.com", 12);
    expect(employeeOne.getName()).toBe("Sam")

})