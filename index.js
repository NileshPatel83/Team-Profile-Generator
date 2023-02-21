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

const addMoreEmployee = [
    {
        type: 'list',
        name: 'choice',
        message: 'Next team member:',
        choices: options,
    },
];

init();

function init(){

    //Promts to add manager and asks questions about the manager.
    const manager = promptToAddManager();

    //Exits the function if fails to find manager data.
    if(manager === null) return;

    //Add manager to employee list.
    employees.push(manager);

    //Prompts to add employees and ask questions for each employee type e.g. Engineer, Intern etc.
    //Exits the function if fails to find engineer or intern data.
    if(!promptToAddMoreEmployees()) return;

    //Generate HTML.
}

function promptToAddMoreEmployees(){

    inquirer
        .prompt(addMoreEmployee)
        .then((response) => {

            //If user selects to add engineer, prompts questions about engineer.
            if(response.choice === options[0]) {
                
                //Promots to add engineer.
                //Returns false if fails to get engineer data.
                const engineer = promtToAddEngineer();
                if(engineer === null) return false;

                //Add the engineer to employee list.
                employees.push(engineer);
                
                //Prompts to add employees and ask questions for each employee type e.g. Engineer, Intern etc.
                //Returns false, if fails.
                if(!promptToAddMoreEmployees()) return false;
            } 
            
            //If user selects to add intern, prompts questions about intern.
            else if (response.choice === options[1]){


                //Prompts to add employees and ask questions for each employee type e.g. Engineer, Intern etc.
                //Returns false, if fails.
                if(!promptToAddMoreEmployees()) return false;
            }

            //Exits the function, if user doesn't want to add more employee.
            else{
                console.log(response.choice);
                return;
            }
        });

    return true;
}

function promtToAddEngineer(){

    inquirer
    .prompt(engineerInputs)
    .then((response) => {

        if(!validateInputData(response)) return null;

        //Create manager class from response.
        const engineer = new Engineer(response.name, response.id, response.email, response.description, response.gitHub, response.linkedIn);
        console.log(engineer);

        return engineer;
    });
}

//Promts to add manager and asks questions about the manager.
function promptToAddManager(){

    inquirer
        .prompt(managerInputs)
        .then((response) => {

            if(!validateInputData(response)) return null;

            //Create manager class from response.
            const manager = new Manager(response.name, response.id, response.email, response.description, response.officeNumber);
            console.log(manager);

            return manager;
        });
}

//Validate the user input data.
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