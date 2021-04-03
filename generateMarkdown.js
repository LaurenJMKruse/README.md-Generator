// Functions
//****************************************************
// 01. Obtain license badge, if license selected
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    let licenseBadge = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    return licenseBadge;
  }
};

// 02. Create license link, if license selected
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    let licenseLink = `[License Information](#license)`;
    return licenseLink;
  }
};

// 03. Create shortcut to License section
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    let licenseSection = `### LICENSE
    
    This application licensed under ${license}.`;
    return licenseSection;
  }
};

// 04. 
function renderCopyright(copyright, authorName) {
  if (copyright === 'No') {
    return 'Not Applicable';
  } else {
    let authorCopyright = `Copyright © 2021 by ${authorName}`;
    return authorCopyright;
  }
};

// ##. Generate README markdown file
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ### TABLE OF CONTENTS
  * [User Story](#userStory)

  * [Project Description](#projectDescription)
  
  * [Installation Instructions](#installation)
  
  * [Usage Instructions](#usageInstructions)
  
  * [Special Features](#specialFeatures)
  
  * [Credits](#credits)
  
  * [References](#references)
  
  * [License](#license)  
  
  * [Author](#author)
  
  * [Copyright](#copyright)

  * [Data Validation / Testing Methods](#testMethods)

  * [Further Developments](#furtherDevelopments)
  
  * [How to Contribute](#contributions)
  
  * [Provide Feedback](#ADDLINK)
  
  


  ### USER STORY
  ${data.userStory}


  ### PROJECT DESCRIPTION
  ${data.projectDescription}


  ### INSTALLATION INSTRUCTIONS
  ${data.installation}


  ### USAGE INSTRUCTIONS
  ${data.usageInstructions}


  ### SPECIAL FEATURES
  ${data.specialFeatures}


  ### CREDITS
  ${data.credits}


  ### REFERENCES
  In creating this application, I relied upon the guidance of the following people/entities:
  ${data.references}

  
  ### LICENSE  ********* FIX
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  
  ### AUTHOR
  ${data.name}  
  
  [Please visit me on GitHub!](https://github.com/${data.gitHubName})


  ### COPYRIGHT
  ${renderCopyright(data.copyright, data.name)}


  ### DATA VALIDATION / TESTING METHODS
  ${data.testMethods}


  ### FURTHER DEVELOPMENTS
  ${data.furtherDevelopments}


  ### HOW TO CONTRIBUTE TO THIS PROJECT
  ${data.contributions}


  ### PROVIDE FEEDBACK
  Questions and comments are always welcome!
  Email: ${data.emailAddress}
  GitHub: ${data.gitHubName}
  Slack: ${data.slackName}
  
  Preferred communication method: ${data.contactMethod}
`;
}

module.exports = generateMarkdown;
