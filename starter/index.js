const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your team manager\'s name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their ID?',
    },
   
   
    {
        type: 'input',
        name: 'officeNumber',
        message: 'what is their office number?',
      },
    
    {
        type: 'input',
        name: 'email',
        message: 'Please add their email address: ',
      },
      {
        type: 'list',
        message: 'What do you want to do next?',
        name: 'Employee',
        choices: ['Engineer', 'Intern', 'Manager'],
      },
  ]
  if ()
  {
    type: 'input',
    name: 'gitHub',
    message: 'what is your GitHub username?',
  },
  
  
  )
  .then((data) => {
    
 
    const dataRender = render(data);
    
 
    fs.writeFile(outputPath, dataRender, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


