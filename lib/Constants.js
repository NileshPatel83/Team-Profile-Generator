class Constants {

    constructor(){
        
        this.options = ['Engineer', 'Intern', 'I don\'t want to add any more team members.'];

        this.managerInputs =[
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

        this.engineerInputs =[
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

        this.internInputs =[
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

        this.nextTeamMember = [
            {
                type: 'list',
                name: 'choice',
                message: 'Next team member:',
                choices: this.options,
            },
        ];
    }
}

module.exports = Constants;