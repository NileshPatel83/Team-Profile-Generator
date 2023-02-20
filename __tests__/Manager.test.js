const Manager = require('../lib/Manager.js');

describe("Manager", () => {

    const name = 'Nilesh Patel';
    const id = '001';
    const email = 'nilesh@email.com';
    const officeNumber = '08 8000 0000';

    //Initialization tests.
    describe("Initialization", () => {  

        //Tests whether a new instance of Manager object is created or not.
        it("should return a new 'Manager' object", () => {

            const manager = new Manager();

            expect(manager instanceof Manager).toEqual(true);
          });

         //Tests value of property called 'officeNumber' when a new instance of Manager class is crated using constructor.
         it("should set a 'officeNumber' property", () => {

            const manager = new Manager(name, id, email, officeNumber);

            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });
});