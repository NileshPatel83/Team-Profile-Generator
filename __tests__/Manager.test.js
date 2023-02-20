const Manager = require('../lib/Manager.js');

describe("Manager", () => {

    const officeNumber = '08 8000 0000';

    //Initialization tests.
    describe("Initialization", () => {  

        //Tests whether a new instance of Manager object is created or not.
        it("should return a new 'Manager' object", () => {

            const manager = new Manager();

            expect(manager instanceof Manager).toEqual(true);
          });
    });
});