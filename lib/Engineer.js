const Employee = require('../lib/Employee.js');

class Engineer extends Employee{

    constructor(name, id, email, github, linkedIn){
        super (name, id, email);
        this.github = github;
        this.linkedIn = linkedIn;
    }

    //Returns GitHub profile url of the engineer.
    getGithub(){
        return (`https://github.com/${this.github}`);
    }

    //Returns LinkedIn profile url of the engineer.
    getLinkedIn(){
        return this.linkedIn;
    }

    //Returns the role of the engineer which is the name of the class.
    getRole(){
        return Engineer.name;
    }
}

module.exports = Engineer;