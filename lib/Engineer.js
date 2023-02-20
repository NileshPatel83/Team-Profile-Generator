const Employee = require('../lib/Employee.js');

class Engineer extends Employee{

    constructor(name, id, email, github, linkedIn){
        super (name, id, email);
        this.github = github;
        this.linkedIn = linkedIn;
    }

    getGithub(){
        return (`https://github.com/${this.github}`);
    }

    getLinkedIn(){
        return this.linkedIn;
    }
}

module.exports = Engineer;