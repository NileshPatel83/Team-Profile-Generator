const Employee = require('../lib/Employee.js');

class Intern extends Employee{
    
    constructor(name, id, email, school, linkedIn){
        super (name, id, email);
        this.school = school;
    }
}

module.exports = Intern;