const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

class HTMLTemplate{

    constructor(employeeData){
        this.employeeData = employeeData;
    }

    //Generates content to create HTML file from all employee data provided in constructor.
    generateHTMLContent(){
        
        let htmlContent = '';

        //Returns empty data if employee data is null.
        if(this.employeeData === null) return htmlContent;

        //Gets content for manager.
        let managerContent = getManagerContent();

        //Gets content for all engineers.
        let engineersContent = getEngieersContent();

        let internsContent = getInternsContent();

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

        //Returns empty manager data if employee data is null.
        if(this.employeeData === null) return managerContent;

        //Gets an instance of manager class.
        const manager = getManager();

        //Returns null if fails to find a manager from employee data.
        if(manager === null) return managerContent;

        managerContent = `

        <div class="left">

            <h3 class="label label-manager">Manager</h3>

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

        //Returns null if employee data is null.
        if(this.employeeData === null) return null;

        //Loops through all employee data to find the manager.
        this.employeeData.forEach(employee => {
            if(employee.getRole() === Manager.name) return employee;
        });
    }

    //Gets content for all engineers.
    getEngieersContent(){

        let engineersContent = '';

        //Returns empty engineers data if employee data is null.
        if(this.employeeData === null) return engineersContent;

        //Gets array of all engineers from employee data.
        const engineers = getEngineers();

        //Returns null if fails to find an engineer from employee data.
        if(engineers === null) return engineersContent;

        engineersContent =`
        
        <h3 class="label label-engineers">Engineers</h3>

        <div class="engineers">
        `;

        //Loops through engineers to get content.
        engineers.forEach(engineer => {
            let engineerContent = getCurrentEngineerContent(engineer);
            engineersContent += engineerContent;
        });

        engineersContent += '</div>';

        return engineersContent;
    }

    //Gets array of all engineers from employee data.
    getEngineers(){

        //Returns null if employee data is null.
        if(this.employeeData === null) return null;

        //Loops through all employee data to find the engineers.
        let engineers = employeeData.filter(employee => employee.getRole() === Engineer.name);

        return engineers;
    }

    //Gets current engineer's data.
    getCurrentEngineerContent(engineer){

        let engineerContent = '';

        if(engineer === null) return engineerContent;

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
                    <div><a href="${engineer.getLinkedIn()}" target="_blank"><img class="linked-in" src="../images/LinkedIn.png" alt="LinkedIn Logo"></a></div>
                </div>
            </div>
        </div>

        `;

        return engineerContent;
    }

    //Gets content for all interns.
    getInternsContent(){

        let internsContent = '';

        //Returns empty interns data if employee data is null.
        if(this.employeeData === null) return internsContent;

        //Gets array of all interns from employee data.
        const interns = getInterns();

        //Returns null if fails to find an intern from employee data.
        if(interns === null) return internsContent;

        internsContent = `

        <h3 class="label label-interns">Interns</h3>

        <div class="interns">
        `;

        //Loops through interns to get content.
        interns.forEach(intern => {
            let internContent = getCurrentInternContent(intern);
            internsContent += internContent;
        });

        internsContent += '</div>';

        return internsContent;
    }

    //Gets array of all interns from employee data.
    getInterns(){

        //Returns null if employee data is null.
        if(this.employeeData === null) return null;

        //Loops through all employee data to find the interns.
        let intenrs = employeeData.filter(employee => employee.getRole() === Intern.name);

        return intenrs;
    }

    //Gets current interns's data.
    getCurrentInternContent(intern){

        let internContent = '';

        if(intern === null) return internContent;

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
                <div><a href="${intern.getLinkedIn()}" target="_blank"><img class="linked-in" src="../images/LinkedIn.png" alt="LinkedIn Logo"></a></div>
            </div>
        </div>

        `;

        return internContent;
    }
}

module.exports = HTMLTemplate;