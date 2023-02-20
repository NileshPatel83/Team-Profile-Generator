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

         //Tests value of property called 'school' when a new instance of Intern class is created using constructor.
         it("should set a 'school' property", () => {

            const intern = new Intern(name, id, email, school, linkedIn);

            expect(intern.school).toEqual(school);
        });
    });

});