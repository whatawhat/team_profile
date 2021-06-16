
const Engineer = require ("../lib/Engineer.js");
test("testing for github", () => {
    let employeeOne = new Engineer("Sam", 3, "sam@gmail.com", "abde");
    expect(employeeOne.getGithub()).toBe("abde")
} );

test("testing for role", () => {
    let employeeOne = new Engineer("Sam", 3, "sam@gmail.com", "abde");
    expect(employeeOne.getRole()).toBe("Engineer")
} );

test("testing for name", () => {
    let employeeOne = new Engineer("Sam", 3, "sam@gmail.com", "abde");
    expect(employeeOne.getName()).toBe("Sam")

})
