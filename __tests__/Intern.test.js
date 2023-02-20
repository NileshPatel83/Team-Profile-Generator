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

           //Tests value of property called 'linkedIn' when a new instance of Intern class is created using constructor.
           it("should set a 'linkedIn' property", () => {

            const intern = new Intern(name, id, email, school, linkedIn);

            expect(intern.linkedIn).toEqual(linkedIn);
        });
    });

    //Tests getSchool method of a new instance of Intern class.
    describe("getSchool", () => {
        it("should return school name of the intern", () => {

            const intern = new Intern(name, id, email, school, linkedIn);

            expect(intern.getSchool()).toEqual(school);
        });
    });

    //Tests getLinkedIn method of a new instance of Intern class.
    describe("getLinkedIn", () => {
        it("should return LinkedIn profile URL of the intern", () => {

            const intern = new Intern(name, id, email, school, linkedIn);

            expect(intern.getLinkedIn()).toEqual(linkedIn);
        });
    });
    
     //Tests getRole method of a new instance of Intern class.
     describe("getRole", () => {
        it("should return the role of the intern", () => {

            const intern = new Intern(name, id, email, school, linkedIn);

            expect(intern.getRole()).toEqual('Intern');
        });
    });
});