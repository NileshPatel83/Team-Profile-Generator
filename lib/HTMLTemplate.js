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

        let managerContent = getManagerContent();



        return htmlContent;
    }

    getManagerContent(){

        let managerContent = '';

         //Returns empty manager data if employee data is null.
         if(this.employeeData === null) return managerContent;

           
    }
}

module.exports = HTMLTemplate;