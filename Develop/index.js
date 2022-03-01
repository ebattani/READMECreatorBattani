// External modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Modules needed internally
const apiCall = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Questions that will prompt for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
  
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'repo',

    },
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
   
    },
    {
        type: 'input',
        message: "Write a description for your project.",
        name: 'description',
       
    },
    {
        type: 'input',
        message: "What are the steps necessary to install your project?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Please provide instructions and examples for your project.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

// Writing the data to the fi;e
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// Converting the returns using a callback to return responses in the object
const writeFileAsync = util.promisify(writeToFile);

// FUNCTION START 
async function init() {
    try {

        // Prompt Inquirer questions
        const userInput = await inquirer.prompt(questions);
    
        // Pass user info pulled from GitHub into userInfo
        const userInfo = await apiCall.getUser(userInput);
       
    
        // Pass Inquirer userInput and GitHub userInfo to generate Markdown
        const readMe = generateMarkdown(userInput, userInfo);
       
    
        // Write markdown to file
        await writeFileAsync('EXAMPLE.md', readMe);

    } catch (error) {
        console.log(error);
    }
};

init();