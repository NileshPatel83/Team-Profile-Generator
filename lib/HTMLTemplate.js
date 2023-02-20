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

        //Loops through engineers to get content.
    }

    //Gets array of all engineers from employee data.
    getEngineers(){

        //Returns null if employee data is null.
        if(this.employeeData === null) return null;

        //Loops through all employee data to find the engineers.
        let engineers = employeeData.filter(employee => employee.getRole() === Engineer.name);

        return engineers;
    }
}

module.exports = HTMLTemplate;