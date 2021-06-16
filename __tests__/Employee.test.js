const Employee = require ("../lib/Employee.js");
test("testing for name", () => {
    let employeeOne = new Employee("Sam", 3, "sam@gmail.com");
    expect(employeeOne.getName()).toBe("Sam")
} );

test("testing for id", () => {
    let employeeOne = new Employee("Sam", 3, "sam@gmail.com");
    expect(employeeOne.getId()).toBe(3)
} );

test("testing for email", () => {
    let employeeOne = new Employee("Sam", 3, "sam@gmail.com");
    expect(employeeOne.getEmail()).toBe("sam@gmail.com")
} );

test("testing for role", () => {
    let employeeOne = new Employee("Sam", 3, "sam@gmail.com");
    expect(employeeOne.getRole()).toBe("Employee")
} );