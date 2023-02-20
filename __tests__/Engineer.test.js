const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {

    const name = 'Nilesh Patel';
    const id = '001';
    const email = 'nilesh@email.com';
    const githubName = 'NileshPatel83';
    const linkedIn = 'www.linkedin.com';

    //Initialization tests.
    describe("Initialization", () => {  

        //Tests whether a new instance of Engineer object is created or not.
        it("should return a new 'Engineer' object", () => {

            const engineer = new Engineer();

            expect(engineer instanceof Engineer).toEqual(true);
          });
    });
});