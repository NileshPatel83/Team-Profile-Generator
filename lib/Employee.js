class Employee{

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Returns the name of the employee.
    getName(){
        return this.name;
    }

    //Returns the id of the employee.
    getId(){
        return this.id;
    }
}
module.exports = Employee;