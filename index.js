//Variable to access Manager class.
const Manager = require('./lib/Manager.js');

//Variable to access Engineer class.
const Engineer = require('./lib/Engineer.js');

//Variable to access Intern class.
const Intern = require('./lib/Intern.js');

//Variable to access HTMLTemplate class.
const HTMLTemplate = require('./lib/HTMLTemplate.js');

//Variable to access constants in Constants class.
const Constants = require('./lib/Constants.js');
const constants = new Constants();

//Variable to access inquirer module methods.
const inquirer = require('inquirer');

//Variable to access file system module methods.
const fs = require('fs');

//Employee array that will be used to generate HTML content.
let employeeData = [];

init();

function init(){

    inquirer
        .prompt(constants.managerInputs)
        .then((response) => {

            //Validates the user input data.
            if(!validateInputData(response)) return;

            //Create manager class from response.
            const manager = new Manager(response.name, response.id, response.email, response.description, response.officeNumber);
            //console.log(manager);

            //Add manager to employee list.
            employeeData.push(manager);

            //Asks user whether they would like to add more employees or not.
            addMoreEmployees();
        });
    
    return true;
}

//Asks user whether they would like to add more employees or not.
function addMoreEmployees(){

    //Prompts to add employees and gets user response whether user would like to add engineer or intern or none.
    inquirer
        .prompt(constants.nextTeamMember)
        .then((response) => { 
            
            //If user selects to add engineer, prompts questions about engineer.
            if(response.choice === constants.options[0]) {
                        
                //Prompts to add engineer and ask questions about the engineer.
                inquirer
                    .prompt(constants.engineerInputs)
                    .then((response) => {

                        //Validates the user input data.
                        if(!validateInputData(response)) return false;

                        //Create engineer class from response.
                        const engineer = new Engineer(response.name, response.id, response.email, response.description, response.gitHub, response.linkedIn);
                        //console.log(engineer);

                        //Add the engineer to employee list.
                        employeeData.push(engineer);

                        //Asks user whether they would like to add more employees or not.
                        addMoreEmployees();
                    });
            } 
            
            //If user selects to add intern, prompts questions about intern.
            else if (response.choice  === constants.options[1]){

                //Prompts to add intern and ask questions about the intern.
                inquirer
                    .prompt(constants.internInputs)
                    .then((response) => {

                        //Validates the user input data.
                        if(!validateInputData(response)) return false;

                        //Create intern class from response.
                        const intern = new Intern(response.name, response.id, response.email, response.description, response.school, response.linkedIn);
                        //console.log(intern);

                        //Add the intern to employee list.
                        employeeData.push(intern);

                        //Asks user whether they would like to add more employees or not.
                        addMoreEmployees();
                });
            }

            else {
                //console.log(employees);

                //Processes employee data to HTML file.
                processEmployeeData();
            }
        });

    return true;
}

//Processes employee data to HTML file.
function processEmployeeData(){

    //console.log(employeeData);

    //Create HTML Template class using employee data.
    const htmlemplate = new HTMLTemplate(employeeData);

    //Generates HTML content from enplyee data.
    const htmlContent = htmlemplate.generateHTMLContent();
    if(htmlContent === ''){
        console.error('Failed to generate HTML content to create HTML file.');
    }

    //Creates HTML file.
    createHTMLFile(htmlContent);
}

//Creates HTML file.
function createHTMLFile(htmlContent){

    const htmlFilePath = `./dist/${constants.htmlFileName}`;

    fs.writeFile(htmlFilePath, htmlContent, (err) =>
        err ? console.error(err) : console.log(`${constants.htmlFileName} file created successfully!`)
    );
}

//Validates the user input data.
function validateInputData(data){

    let failedFields = [];

    //Loops through all user inputs.
    for (const [key, value] of Object.entries(data)) {

        //Gets the key with upper case letter.
        const property = key.charAt(0).toUpperCase() + key.substring(1);

        //If the data type is string, checks whether it is defined and the value is not empty.
        //If fails, adds the property name to list.
        if(typeof(value) === 'string'){
            if(value === 'undefined' || value.trim() === '') failedFields.push(property);

        //If the data type is not string then it is an array (no other data type is used).
        //In this case, checks the length of the array to make sure at least one value is assigned.
        } else {
            if(value.length === 0) failedFields.push(property);
        }
    }

    //Displays the list of keys which values are not assigned and exits the function.
    if(failedFields.length > 0){

        console.error('\nInformation for following field(s) not provided:');

        //Loops through key list that has no value assigned.
        failedFields.forEach(value => console.error(`${value}`));
        
        console.error('All fields MUST have a value.');
        return false;
    }

    return true;
}