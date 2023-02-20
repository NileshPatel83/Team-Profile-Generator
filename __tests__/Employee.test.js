const Employee = require('../lib/Employee.js');

describe("Employee", () => {

    const name = 'Nilesh Patel';
    const id = '001';
    const email = 'nilesh@email.com';
    const description = 'This is a description for employee.';

    //Initialization tests.
    describe("Initialization", () => {  

        //Tests whether a new instance of Employee object is created or not.
        it("should return a new 'Employee' object", () => {

            const employee = new Employee();

            expect(employee instanceof Employee).toEqual(true);
          });

        //Tests value of property called 'name' when a new instance of Employee class is created using constructor.
        it("should set a 'name' property", () => {

            const employee = new Employee(name, id, email, description);

            expect(employee.name).toEqual(name);
        });

        //Tests value of property called 'id' when a new instance of Employee class is crated using constructor.
        it("should set a 'id' property", () => {

            const employee = new Employee(name, id, email, description);

            expect(employee.id).toEqual(id);
        });

        //Tests value of property called 'email' when a new instance of Employee class is crated using constructor.
        it("should set a 'email' property", () => {

            const employee = new Employee(name, id, email, description);

            expect(employee.email).toEqual(email);
        });

         //Tests value of property called 'description' when a new instance of Employee class is crated using constructor.
         it("should set a 'description' property", () => {

            const employee = new Employee(name, id, email, description);

            expect(employee.description).toEqual(description);
        });
    });

    //Tests getName method of a new instance of Employee class.
    describe("getName", () => {
        it("should return the name of the employee", () => {

            const employee = new Employee(name, id, email, description);

            expect(employee.getName()).toEqual(name);
        });
    });

    //Tests getId method of a new instance of Employee class.
    describe("getId", () => {
        it("should return the id of the employee", () => {

            const employee = new Employee(name, id, email, description);

            expect(employee.getId()).toEqual(id);
        });
    });

    //Tests getEmail method of a new instance of Employee class.
    describe("getEmail", () => {
        it("should return the email of the employee", () => {

            const employee = new Employee(name, id, email, description);

            expect(employee.getEmail()).toEqual(email);
        });
    });

    //Tests getRole method of a new instance of Employee class.
    describe("getRole", () => {
        it("should return the role of the employee", () => {

            const employee = new Employee(name, id, email, description);

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});