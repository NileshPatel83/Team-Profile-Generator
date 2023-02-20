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

    //Returns the role of the intern which is the name of the class.
    getRole(){
        return Intern.name;
    }
}

module.exports = Intern;