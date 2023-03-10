const Manager = require('../lib/Manager.js');

describe("Manager", () => {

    const name = 'Nilesh Patel';
    const id = '001';
    const email = 'nilesh@email.com';
    const description = 'This is a short description about the manager.';
    const officeNumber = '08 8000 0000';

    //Initialization tests.
    describe("Initialization", () => {  

        //Tests whether a new instance of Manager object is created or not.
        it("should return a new 'Manager' object", () => {

            const manager = new Manager();

            expect(manager instanceof Manager).toEqual(true);
          });

         //Tests value of property called 'officeNumber' when a new instance of Manager class is created using constructor.
         it("should set a 'officeNumber' property", () => {

            const manager = new Manager(name, id, email, description, officeNumber);

            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });

     //Tests getRole method of a new instance of Manager class.
     describe("getRole", () => {
        it("should return the role of the manager", () => {

            const manager = new Manager(name, id, email, description, officeNumber);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});