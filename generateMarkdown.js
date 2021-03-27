// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    let licenseBadge = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    return licenseBadge;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    let licenseLink = `[License Information](#license)`;
    return licenseLink;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    let licenseSection = `### LICENSE
    
    This application licensed under ${license}.`;
    return licenseSection;
  }
};

function renderCopyright(copyright, authorName) {
  if (copyright === 'No') {
    return 'Not Applicable';
  } else {
    let authorCopyright = `Copyright © 2021 by ${authorName}`;
    return authorCopyright;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

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

  ### LICENSE
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
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
  Questions and comments are welcome!
  Email: ${data.emailAddress}
  GitHub: ${data.gitHubName}
  Slack: ${data.slackName}
  Preferred communication method: ${data.contactMethod}
`;
}

module.exports = generateMarkdown;
