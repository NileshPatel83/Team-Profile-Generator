const Employee = require('../lib/Employee.js');

class Manager extends Employee{

    constructor(name, id, email, description, officeNumber){
        super (name, id, email, description);
        this.officeNumber = officeNumber;
    }

     //Returns the role of the manager which is the name of the class.
     getRole(){
        return Manager.name;
    }
}

module.exports = Manager;