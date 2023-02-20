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

        //Tests value of property called 'employeeData' when a new instance of HTMLTemplate class is created using constructor.
        it("should set a 'employeeData' property", () => {

            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.employeeData).toEqual(employeeData);
        });
    });

    //Tests generateHTMLContent method of a new instance of HTMLTemplate class.
    describe("generateHTMLContent", () => {
        it("should return html content to generate html file", () => {

            const htmlContent = '';
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.generateHTMLContent()).toEqual(htmlContent);
        });
    });

    //Tests getManagerContent method of a new instance of HTMLTemplate class.
    describe("getManagerContent", () => {
        it("should return manager content for html content to generate html file", () => {

            const managerContent = '';
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.getManagerContent()).toEqual(managerContent);
        });
    });

    //Tests getManager method of a new instance of HTMLTemplate class.
    describe("getManager", () => {
        it("should return an instance of manager class", () => {

            const manager = null;
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.getManager()).toEqual(manager);
        });
    });
});