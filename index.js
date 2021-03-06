// A. Variables
// ********************************************
// 01. To import required packages
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// 02. To hold options when gathering user input
const contactMethods = ['Email', 'GitHub', 'Slack'];
const licenseTypes = ['Academic Free License v3.0', 'Apache License 2.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unilicense', 'None'];

// B. Array
// ********************************************
// Contains questions to gather user input
const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is your name?'
    },
    {
        name: 'gitHubName',
        type: 'input',
        message: 'Please state your GitHub username.'
    },
    {
        name: 'emailAddress',
        type: 'input',
        message: 'What is your email address?'
    },
    {
        name: 'slackName',
        type: 'input',
        message: 'What is your Slack display name?'
    },
    {
        name: 'contactMethod',
        type: 'checkbox',
        message: 'What is your preferred contact method?',
        choices: contactMethods,
    },
    {
        name: 'projectTitle',
        type: 'input',
        message: 'What is the name of your project?'
    },
    {
        name: 'userStory',
        type: 'input',
        message: 'What user story is the driver of this application?'
    },
    {
        name: 'projectDescription',
        type: 'input',
        message: 'Please provide a brief description of your project.'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps to install your application?'
    },
    {
        name: 'usageInstructions',
        type: 'input',
        message: 'Briefly describe how your application is used.'
    },
    {
        name: 'specialFeatures',
        type: 'input',
        message: 'Describe the unique features of your project.'
    },
    {
        name: 'credits',
        type: 'input',
        message: `Provide credits for others' graphics, data, etc., utilized in the creation of your project.`
    },
    {
        name: 'references',
        type: 'input',
        message: 'List the names of individuals and/or entities (MDN Docs, W3, etc.) you relied upon for guidance in the creation of your application.'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please indicate the type of license for your project.',
        choices: licenseTypes
    },
    {
        name: 'copyright',
        type: 'list',
        message: 'Do you wish to include a copyright?',
        choices: ['Yes', 'No']
    },
    {
        name: 'testMethods',
        type: 'input',
        message: 'Describe data validation and tests performed on your application.'
    },
    {
        name: 'furtherDevelopments',
        type: 'input',
        message: 'What plans do you have to improve or expand your application?'
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'How can developers contribute to your project?'
    },
    {
        name: 'feedback',
        type: 'input',
        message: 'Enter any notes regarding comments, questions, and other feedback.'
    }
];

// C. Functions
// ********************************************
// 01. Creation of README.md file
function writeToFile(fileName, data) {
    let currentWorkingDirectory = process.cwd();
    console.log(`The current working directory is: ${currentWorkingDirectory}`);
    let generateMarkdown = fileName;
    let userInput = data;
    let sourceFiles = fs.writeFileSync(path.join(currentWorkingDirectory, generateMarkdown), userInput);
    return sourceFiles;
};

// 02. Initialization of application
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        writeToFile('README.md', generateMarkdown({...userAnswers}));
        console.log(`The README.md file has been created.`);
    });
};

// D. Main Process
// ********************************************
// Function call to initialize application
init();
