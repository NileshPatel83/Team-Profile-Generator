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

    //Tests getEngieersContent method of a new instance of HTMLTemplate class.
    describe("getEngieersContent", () => {
        it("should return content for all engineers for html content to generate html file", () => {

            const engineersContent = '';
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.getEngieersContent()).toEqual(engineersContent);
        });
    });

    //Tests getEngineers method of a new instance of HTMLTemplate class.
    describe("getEngineers", () => {
        it("should return all engineers from employee data", () => {

            const engineers = null;
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.getEngineers()).toEqual(engineers);
        });
    });

     //Tests getCurrentEngineerContent method of a new instance of HTMLTemplate class.
     describe("getCurrentEngineerContent", () => {
        it("should return content for current enginner for html content to generate html file", () => {

            const engineerContent = '';
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.getCurrentEngineerContent(null)).toEqual(engineerContent);
        });
    });

    //Tests getInternsContent method of a new instance of HTMLTemplate class.
    describe("getInternsContent", () => {
        it("should return content for all interns for html content to generate html file", () => {

            const internsContent = '';
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.getInternsContent()).toEqual(internsContent);
        });
    });

    //Tests getInterns method of a new instance of HTMLTemplate class.
    describe("getInterns", () => {
        it("should return all interns from employee data", () => {

            const interns = null;
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.getInterns()).toEqual(interns);
        });
    });

     //Tests getCurrentInternContent method of a new instance of HTMLTemplate class.
     describe("getCurrentInternContent", () => {
        it("should return content for current intern for html content to generate html file", () => {

            const internContent = '';
            const htmlTemplate = new HTMLTemplate(employeeData);

            expect(htmlTemplate.getCurrentInternContent(null)).toEqual(internContent);
        });
    });
});