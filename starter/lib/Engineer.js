// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee  {    
     
    constructor(name, id, email, gitHub) {
            
      super(name, id, email) ;
        this.gitHub = gitHub;
   
      }
      getRole() {
        // console.log(`Hi! This is my role ${this.role}`);
        // return this.role;
        return Object.getPrototypeOf(this).constructor.name; 
      }

      getGithub(){
        return this.gitHub;
      }
      
    }
  
  
  module.exports = Engineer;
  