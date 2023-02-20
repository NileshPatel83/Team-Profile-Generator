const HTMLTemplate = require('../lib/HTMLTemplate');

describe("HTMLTemplate", () => {

    const employeeData = null;

     //Initialization tests.
     describe("Initialization", () => {  

        //Tests whether a new instance of HTMLTemplate object is created or not.
        it("should return a new 'HTMLTemplate' object", () => {

            const htmlTemplate = new HTMLTemplate();

            expect(htmlTemplate instanceof HTMLTemplate).toEqual(true);
          });
    });
});