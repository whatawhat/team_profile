const Intern = require ("../lib/Intern.js");
test("testing for school", () => {
    let employeeOne = new Intern("Sam", 3, "sam@gmail.com", "Montour");
    expect(employeeOne.getSchool()).toBe("Montour")
} );

test("testing for role", () => {
    let employeeOne = new Intern ("Sam", 3, "sam@gmail.com", "Montour");
    expect(employeeOne.getRole()).toBe("Intern")
} );

test("testing for name", () => {
    let employeeOne = new Intern("Sam", 3, "sam@gmail.com", "abde");
    expect(employeeOne.getName()).toBe("Sam")

})