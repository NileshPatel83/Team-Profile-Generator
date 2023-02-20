const Intern = require('../lib/Intern.js');

describe("Intern", () => {

    const name = 'Nilesh Patel';
    const id = '001';
    const email = 'nilesh@email.com';
    const school = 'University of Adelaide';
    const linkedIn = 'www.linkedin.com';

    //Initialization tests.
    describe("Initialization", () => {

         //Tests whether a new instance of Intern object is created or not.
         it("should return a new 'Intern' object", () => {

            const intern = new Intern();

            expect(intern instanceof Intern).toEqual(true);
        });
    });

});