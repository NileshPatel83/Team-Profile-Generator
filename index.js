//Variable to access Employee class.
const Employee = require('./lib/Employee.js');

//Variable to access Manager class.
const Manager = require('./lib/Manager.js');

//Variable to access Engineer class.
const Engineer = require('./lib/Engineer.js');

//Variable to access Intern class.
const Intern = require('./lib/Intern.js');

//Variable to access HTMLTemplate class.
const HTMLTemplate = require('./lib/HTMLTemplate.js');

//Variable to access inquirer module methods.
const inquirer = require('inquirer');

//Variable to access file system module methods.
const fs = require('fs');

const options = ['Engineer', 'Intern', 'I don\'t want to add any more team members.'];

let employees = [];

const managerInputs =[
    {
        type: 'input',
        name: 'name',
        message: 'Team Manager\'s Name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Team Manager\'s ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Team Manager\'s Email:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Short Description about Team Manager:',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Team Manager\'s Office Number:',
    },
];

const engineerInputs =[
    {
        type: 'input',
        name: 'name',
        message: 'Engineer\'s Name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Engineer\'s ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Engineer\'s Email:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Short Description about Engineer:',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Engineer\'s GitHub Username:',
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'Engineer\'s LinkedIn Profile URL:',
    },
];

const internInputs =[
    {
        type: 'input',
        name: 'name',
        message: 'Intern\'s Name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Intern\'s ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Intern\'s Email:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Short Description about Intern:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Intern\'s School:',
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'Intern\'s LinkedIn Profile URL:',
    },
];

const nextTeamMember = [
    {
        type: 'list',
        name: 'choice',
        message: 'Next team member:',
        choices: options,
    },
];

init();

function init(){

    inquirer
        .prompt(managerInputs)
        .then((response) => {

            //Validates the user input data.
            if(!validateInputData(response)) return;

            //Create manager class from response.
            const manager = new Manager(response.name, response.id, response.email, response.description, response.officeNumber);
            //console.log(manager);

            //Add manager to employee list.
            employees.push(manager);

            //Asks user whether they would like to add more employees or not.
            addMoreEmployees();
        });
    
    return true;
}

//Asks user whether they would like to add more employees or not.
function addMoreEmployees(){

    //Prompts to add employees and gets user response whether user would like to add engineer or intern or none.
    inquirer
        .prompt(nextTeamMember)
        .then((response) => { 
            
            //If user selects to add engineer, prompts questions about engineer.
            if(response.choice === options[0]) {
                        
                //Prompts to add engineer and ask questions about the engineer.
                inquirer
                    .prompt(engineerInputs)
                    .then((response) => {

                        //Validates the user input data.
                        if(!validateInputData(response)) return false;

                        //Create engineer class from response.
                        const engineer = new Engineer(response.name, response.id, response.email, response.description, response.gitHub, response.linkedIn);
                        //console.log(engineer);

                        //Add the engineer to employee list.
                        employees.push(engineer);

                        //Asks user whether they would like to add more employees or not.
                        addMoreEmployees();
                    });
            } 
            
            //If user selects to add intern, prompts questions about intern.
            else if (response.choice  === options[1]){

                //Prompts to add intern and ask questions about the intern.
                inquirer
                    .prompt(internInputs)
                    .then((response) => {

                        //Validates the user input data.
                        if(!validateInputData(response)) return false;

                        //Create intern class from response.
                        const intern = new Intern(response.name, response.id, response.email, response.description, response.school, response.linkedIn);
                        //console.log(intern);

                        //Add the intern to employee list.
                        employees.push(intern);

                        //Asks user whether they would like to add more employees or not.
                        addMoreEmployees();
                });
            }

            else {
                //console.log(employees);
            }
        });

    return true;
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