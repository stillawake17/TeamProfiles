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
            choices: ['Engineer', 'Intern', 'Manager', 'End process'],
        },
    ])
    .then(answers => {
        if (answers.Employee === 'Engineer') {
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
                }
            ]).then((data) => {
                const dataRender = render(data);
                fs.writeFile(outputPath, dataRender, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Success!');
                        const dataRender = render(data);
                        fs.writeFile(outputPath, dataRender, (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Success!');
                            }
                        });
                    }
                });
            });
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
                const dataRender = render(data);
                fs.writeFile(outputPath, dataRender, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Success!');
                        const dataRender = render(data);
                        fs.writeFile(outputPath, dataRender, (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('Success!');
                            }
                        });
                    }
                });
            });
     }   });
    
