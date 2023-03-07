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
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID?',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'what is your GitHub username?',
    },
    {
      type: 'checkbox',
      message: 'What is your role?',
      name: 'Employee',
      choices: ['Engineer', 'Intern', 'Manager'],
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'what is your office number?',
      },
    
    {
        type: 'input',
        name: 'email',
        message: 'Please add your email address: ',
      },
   
  ])
  .then((data) => {
    
    // const filename = "render.html";
    const dataRender = render(data);
 
    fs.writeFile(outputPath, dataRender, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


