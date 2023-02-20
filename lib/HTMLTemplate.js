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



        return htmlContent;
    }

    //Gets content for manager.
    getManagerContent(){

        let managerContent = '';

         //Returns empty manager data if employee data is null.
         if(this.employeeData === null) return managerContent;

        //Gets an instance of manager class.
        const manager = getManager();
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
}

module.exports = HTMLTemplate;