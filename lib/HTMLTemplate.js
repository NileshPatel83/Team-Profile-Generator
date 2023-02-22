const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

class HTMLTemplate{

    constructor(employeeData){
        this.employeeData = employeeData;
    }

    //Generates content to create HTML file from all employee data provided in constructor.
    generateHTMLContent() {
        
        let htmlContent = '';

        //Returns empty data if employee data is null.
        if(this.employeeData === null) return htmlContent;

        //Gets content for manager.
        let managerContent = this.getManagerContent();

        //Gets content for all engineers.
        let engineersContent = this.getEngieersContent();

        let internsContent = this.getInternsContent();

        htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../dist/reset.css">
            <link rel="stylesheet" href="../dist/style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <header>
                <h1 class="main-heading">Meet our Professional Team</h1>
            </header>
            <main>
                <div class="content">
                    ${managerContent}
                    <div class="right">
                        <div>
                            ${engineersContent}
                        </div>
                        <div>
                            ${internsContent}
                        </div>
                    </div>
                </div>
            </main>
        
            <footer>
                <div>Made with ❤️</div>
            </footer>
        </body>
        </html>
        `;

        return htmlContent;
    }

    //Gets content for manager.
    getManagerContent(){

        let managerContent = '';

        //Gets an instance of manager class.
        const manager = this.getManager();

        //Returns null if fails to find a manager from employee data.
        if(manager === null) return managerContent;

        managerContent = `
        <div class="left">
            <h3 class="label label-manager">${manager.getRole()}</h3>
            <div class="card manager">
                <div class="card-heading">
                    <img class="photo" src="../images/Person.png" alt="Manager photo">
                    <h2 class="employee-name">${manager.getName()}</h2>
                    <p>${manager.getDescription()}</p>
                </div>
                <div class="card-body">
                    <div><img src="../images/Id.png" alt="ID Sign">: ${manager.getId()}</div>
                    <div><img src="../images/Telephone.png" alt="Phone Sign">: ${manager.officeNumber}</div>
                    <div><img src="../images/Email.png" alt="Email Sign"><a class="text-decoration" href="mailto:${manager.getEmail()}">: ${manager.getEmail()}</a></div>
                </div>
            </div>
        </div>
        `;

        return managerContent;
    }

    //Gets an instance of manager class.
    getManager(){

        //Loops through all employee data to find the manager.
        for (let i = 0; i < this.employeeData.length; i++) {
            const employee = this.employeeData[i];
            if(employee.getRole() === Manager.name) return employee;
        }        

        return null;
    }

    //Gets content for all engineers.
    getEngieersContent(){

        let engineersContent = '';

        //Gets array of all engineers from employee data.
        const engineers = this.getEngineers();

        //Returns null if fails to find an engineer from employee data.
        if(engineers.length === 0) return engineersContent;

        engineersContent =`
        
        <h3 class="label label-engineers">${engineers[0].getRole()}s</h3>
        <div class="engineers">
        `;

        //Loops through engineers to get content.
        for (let i = 0; i < engineers.length; i++) {
            const engineer = engineers[i];
            let engineerContent = this.getCurrentEngineerContent(engineer);
            engineersContent += engineerContent;
        }

        engineersContent += '</div>';

        return engineersContent;
    }

    //Gets array of all engineers from employee data.
    getEngineers(){

        let engineers = [];

        for (let i = 0; i < this.employeeData.length; i++) {
            const employee = this.employeeData[i];
            if(employee.getRole() === Engineer.name) engineers.push(employee);
        }

        return engineers;
    }

    //Gets current engineer's data.
    getCurrentEngineerContent(engineer){

        let engineerContent = '';

        engineerContent = `
        <div class="card engineer">
            <div class="card-heading">
                <img class="photo" src="../images/Person.png" alt="Engineer photo">
                <h2 class="employee-name">${engineer.getName()}</h2>
                <p>${engineer.getDescription()}</p>
            </div>
            <div class="card-body">
                <div><img src="../images/Id.png" alt="ID Sign">: ${engineer.getId()}</div>
                <div><img src="../images/Email.png" alt="Email Sign"><a href="mailto:${engineer.getEmail()}">: ${engineer.getEmail()}</a></div>
                <div>
                    <div><a href="https://github.com/${engineer.getGithub()}" target="_blank"><img class="github" src="../images/GitHub.png" alt="GitHub Logo"></a></div>
                    <div><a href="https://${engineer.getLinkedIn()}" target="_blank"><img class="linked-in" src="../images/LinkedIn.png" alt="LinkedIn Logo"></a></div>
                </div>
            </div>
        </div>
        `;

        return engineerContent;
    }

    //Gets content for all interns.
    getInternsContent(){

        let internsContent = '';

        //Gets array of all interns from employee data.
        const interns = this.getInterns();

        //Returns null if fails to find an intern from employee data.
        if(interns.length === 0) return internsContent;

        internsContent = `
        <h3 class="label label-interns">${interns[0].getRole()}s</h3>
        <div class="interns">
        `;

        //Loops through interns to get content.
        for (let i = 0; i < interns.length; i++) {
            const intern = interns[i];
            let internContent = this.getCurrentInternContent(intern);
            internsContent += internContent;
        }

        internsContent += '</div>';

        return internsContent;
    }

    //Gets array of all interns from employee data.
    getInterns(){

        let intenrs = [];

        for (let i = 0; i < this.employeeData.length; i++) {
            const employee = this.employeeData[i];
            if(employee.getRole() === Intern.name) intenrs.push(employee);
        }

        return intenrs;
    }

    //Gets current interns's data.
    getCurrentInternContent(intern){

        let internContent = '';

        internContent = `
        <div class="card intern">
            <div class="card-heading">
                <img class="photo" src="../images/Person.png" alt="Engineer photo">
                <h2 class="employee-name">${intern.getName()}</h2>
                <p>${intern.getDescription()}</p>
            </div>
            <div class="card-body">
                <div><img  src="../images/Id.png" alt="ID Sign">: ${intern.getId()}</div>
                <div><img  src="../images/Email.png" alt="Email Sign"><a class="text-decoration" href="mailto:${intern.getEmail()}">: ${intern.getEmail()}</a></div>
                <div><img  src="../images/School.png" alt="School Logo">: ${intern.getSchool()}</a></div>
                <div><a href="https://${intern.getLinkedIn()}" target="_blank"><img class="linked-in" src="../images/LinkedIn.png" alt="LinkedIn Logo"></a></div>
            </div>
        </div>
        `;

        return internContent;
    }
}

module.exports = HTMLTemplate;