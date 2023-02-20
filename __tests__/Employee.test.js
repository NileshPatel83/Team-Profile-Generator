const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return a object containing 'name', 'id' and 'email' properties", () => {
            const name = 'Nilesh';
            const id = '001';
            const email = 'nilesh@email.com';

            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });
    });
});