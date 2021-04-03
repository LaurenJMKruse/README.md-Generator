// Functions
//****************************************************
// 01. Obtain license badge, if license selected
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
  
    let licenseBadgeLink;    

    switch (license) {
      case 'Academic Free License v3.0':
          licenseBadgeLink = 'Academic%20Free%20License%20v3.0';
          break;

      case 'Apache License 2.0':
          licenseBadgeLink = 'Apache%20License%202.0';
          break;

      case 'Creative Commons Zero v1.0 Universal':
          licenseBadgeLink = 'Creative%20Commons%20Zero%20v1.0%20Universal';
          break;
  
      case 'Eclipse Public License 2.0':
          licenseBadgeLink = 'Eclipse%20Public%20License%202.0';
          break;

      case 'GNU General Public License v3.0':
          licenseBadgeLink = 'GNU%20General%20Public%20License%20v3.0';
          break;
    
      case 'MIT License':
          licenseBadgeLink = 'MIT%20License';
          break;

      case 'Mozilla Public License 2.0':
          licenseBadgeLink = 'Mozilla%20Public%20License%202.0';
          break;
      
      case 'The Unilicense':
          licenseBadgeLink = 'The%20Unilicense';
          break;
      }

      let licenseBadge = '[![License Badge](https://badgen.net/badge/icon/' + licenseBadgeLink + '?icon=github&label)](https://badgen.net/)';

      return licenseBadge;
    }
};

// 02. Create content for License section
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'This application does not have a license.';
  } else {
    let licenseSection = `This application licensed under ${license}.`;
    return licenseSection;
  }
};

// 03. Create link to license information, if license selected
function renderLicenseInfoLink(license) {
  if (license === 'None') {
    return 'Not Applicable';
  } else {
      let licenseInfoLink;

      switch (license) {
        case 'Academic Free License v3.0':
            licenseInfoLink = 'https://choosealicense.com/licenses/afl-3.0/';
            break;

        case 'Apache License 2.0':
          licenseInfoLink = 'https://choosealicense.com/licenses/apache-2.0/';
          break;

        case 'Creative Commons Zero v1.0 Universal':
            licenseInfoLink = 'https://choosealicense.com/licenses/cc0-1.0/';
          break;
  
        case 'Eclipse Public License 2.0':
            licenseInfoLink = 'https://choosealicense.com/licenses/epl-2.0/';
            break;

        case 'GNU General Public License v3.0':
            licenseInfoLink = 'https://choosealicense.com/licenses/gpl-3.0/';
            break;
    
        case 'MIT License':
            licenseInfoLink = 'https://choosealicense.com/licenses/mit/';
            break;

        case 'Mozilla Public License 2.0':
            licenseInfoLink = 'https://choosealicense.com/licenses/mpl-2.0/';
            break;
      
        case 'The Unilicense':
            licenseInfoLink = 'https://choosealicense.com/licenses/unlicense/';
          break;
      }

      return licenseInfoLink;
  }
};

// 04. Create content for Copyright section
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
  <br><br>  

  ### TABLE OF CONTENTS
  * [User Story](#user-story)

  * [Project Description](#project-description)
  
  * [Installation Instructions](#installation-instructions)
  
  * [Usage Instructions](#usage-instructions)
  
  * [Special Features](#special-features)
  
  * [Credits](#credits)
  
  * [References](#references)
  
  * [License](#license)  
  
  * [Author](#author)
  
  * [Copyright](#copyright)

  * [Data Validation and Testing Methods](#data-validation-and-testing-methods)

  * [Further Developments](#further-developments)
  
  * [How to Contribute to this Project](#how-to-contribute-to-this-project)
  
  * [Provide Feedback](#provide-feedback)
  <br><br><br>
 
  ***
  
  <br><br><br>

  ### USER STORY
  ${data.userStory}
  <br><br>


  ### PROJECT DESCRIPTION
  ${data.projectDescription}
  <br><br>


  ### INSTALLATION INSTRUCTIONS
  ${data.installation}
  <br><br>


  ### USAGE INSTRUCTIONS
  ${data.usageInstructions}
  <br><br>


  ### SPECIAL FEATURES
  ${data.specialFeatures}
  <br><br>


  ### CREDITS
  ${data.credits}
  <br><br>


  ### REFERENCES
  In creating this application, I relied upon the guidance of the following people/entities:<br>
  ${data.references}
  <br><br>

  
  ### LICENSE
  ${renderLicenseSection(data.license)}
  
  License Information<br>
  ${renderLicenseInfoLink(data.license)}
  <br><br>

  
  ### AUTHOR
  ${data.name}<br>

  [Please visit me on GitHub!](https://github.com/${data.gitHubName})
  <br><br>


  ### COPYRIGHT
  ${renderCopyright(data.copyright, data.name)}
  <br><br>


  ### DATA VALIDATION AND TESTING METHODS
  ${data.testMethods}
  <br><br>


  ### FURTHER DEVELOPMENTS
  ${data.furtherDevelopments}
  <br><br>


  ### HOW TO CONTRIBUTE TO THIS PROJECT
  ${data.contributions}
  <br><br>


  ### PROVIDE FEEDBACK
  ${data.feedback}
  * Email: [${data.emailAddress}](${data.emailAddress})

  * GitHub: ${data.gitHubName}
  
  * Slack: ${data.slackName}
  
  Preferred communication method: ${data.contactMethod}
`;
}

module.exports = generateMarkdown;
