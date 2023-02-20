const Employee = require('../lib/Employee.js');

class Intern extends Employee{
    
    constructor(name, id, email, school, linkedIn){
        super (name, id, email);
        this.school = school;
        this.linkedIn = linkedIn;
    }

    //Returns the school name of intern.
    getSchool(){
        return this.school;
    }

    //Returns LinkedIn profile url of the intern.
    getLinkedIn(){
        return this.linkedIn;
    }
}

module.exports = Intern;