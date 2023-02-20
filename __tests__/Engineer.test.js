const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {

    const name = 'Nilesh Patel';
    const id = '001';
    const email = 'nilesh@email.com';
    const github = 'NileshPatel83';
    const linkedIn = 'www.linkedin.com';

    //Initialization tests.
    describe("Initialization", () => {  

        //Tests whether a new instance of Engineer object is created or not.
        it("should return a new 'Engineer' object", () => {

            const engineer = new Engineer();

            expect(engineer instanceof Engineer).toEqual(true);
        });

        //Tests value of property called 'github' when a new instance of Engineer class is created using constructor.
        it("should set a 'github' property", () => {

            const engineer = new Engineer(name, id, email, github, linkedIn);

            expect(engineer.github).toEqual(github);
        });

         //Tests value of property called 'linkedIn' when a new instance of Engineer class is created using constructor.
         it("should set a 'linkedIn' property", () => {

            const engineer = new Engineer(name, id, email, github, linkedIn);

            expect(engineer.linkedIn).toEqual(linkedIn);
        });
    });

     //Tests getGithub method of a new instance of Engineer class.
     describe("getGithub", () => {
        it("should return GitHub profile URL of the engineer", () => {

            const engineer = new Engineer(name, id, email, github, linkedIn);

            expect(engineer.getGithub()).toEqual(`https://github.com/${github}`);
        });
    });
});