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
            name: 'employee',
            choices: ['Add Engineer', 'Add Intern', 'Add Manager', 'End process'],
        },
    ]).then((data) => {
        const manager = new Manager(data.name, data.id,data.officeNumber,data.email,data.employee);
        console.log(manager);
        const team = [manager];
        team.push(manager);
    })
    .then(() => {
        /* additional code to execute after previous .then() block */
      })
      .then(() => {
        /* even more code to execute after previous .then() block */
      })
    .then(answers => {
        if (answers.employee === 'Add Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is their name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is their ID?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is their email address?',
                },
                {
                    type: 'input',
                    name: 'gitHub',
                    message: 'What is their Github Username?',
                },
            ]).then((data) => {
                const engineer = new Engineer(data.name, data.id,data.email,data.officeNumber);
                console.log(engineer);
                const team = [engineer];
                team.push(engineer);
                            })
                        } else if (answers.Employee === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the intern\s name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the intern\s id?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the intern\s email address?',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the intern\s school?',
                }
            ]).then((data) => {
                const intern = new Intern(data.name, data.id,data.email,data.officeNumber)
                const team = [intern]

                console.log(intern);               
                team.push(intern);
                
                });
    }});
    
            
