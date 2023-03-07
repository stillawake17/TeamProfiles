// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
     
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getName() {
        return this.name;

    };

    getId() {
        return this.id;
}
getEmail() {
    return this.email;


}
getRole() {
 return Object.getPrototypeOf(this).constructor.name; ;
}
}



// const emp = new Employee('John Doe', 123, 'john.doe@example.com');
// console.log(Object.getPrototypeOf(emp).constructor.name); // output: "Employee"
   

module.exports = Employee;