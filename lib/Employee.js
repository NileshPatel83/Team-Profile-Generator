class Employee{

    constructor(name, id, email, description){
        this.name = name;
        this.id = id;
        this.email = email;
        this.description = description;
    }

    //Returns the name of the employee.
    getName(){
        return this.name;
    }

    //Returns the id of the employee.
    getId(){
        return this.id;
    }

    //Returns the email of the employee.
    getEmail(){
        return this.email;
    }

    //Returns the role of the employee which is the name of the class.
    getRole(){
        return Employee.name;
    }
}

module.exports = Employee;