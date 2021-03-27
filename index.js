// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let currentWorkingDirectory = process.cwd();
    console.log(`The current working directory is: ${currentWorkingDirectory}`);
    let generateMarkdown = fileName;
    let userInput = data;
    let sourceFiles = fs.writeFileSync(path.join(currentWorkingDirectory, generateMarkdown), userInput);
    console.log(`sourceFiles is: ${sourceFiles}`);
    return sourceFiles;
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();

