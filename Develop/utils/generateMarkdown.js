
//Function that returns a license badge based upon user input
function renderLicenseBadge(userInput) {


  switch (userInput.license)
  {
    case 'GNU AGPLv3':
      yourLicense = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
  
      case 'GNU GPLv3':
        yourLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
  
        case 'GNU LGPLv3':
          yourLicense = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]';
      break;
  
          case 'Mozilla Public License 2.0':
            yourLicense = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
      break;
  
            case 'Apache License 2.0':
              yourLicense = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;

              case 'MIT License':
                yourLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;

                case 'Boost Software License 1.0':
                  yourLicense = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
      break;

                  case 'The Unlicense':
                    yourLicense = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
      break;
  
      case '':
        yourLicense = '';
        break;
  }
  return yourLicense;
  }
  
  
//Function that returns a license link based upon user input
  function renderLicenseLink(userInput) {


    switch (userInput.license)
  {
    case 'GNU AGPLv3':
      licenseLink = '![License: AGPL v3](https://www.gnu.org/licenses/agpl-3.0)';
      break;
  
      case 'GNU GPLv3':
        licenseLink = '![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
      break;
  
        case 'GNU LGPLv3':
          licenseLink = '![License: LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
  
          case 'Mozilla Public License 2.0':
            licenseLink = '![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
      break;
  
            case 'Apache License 2.0':
              licenseLink = '![License](https://opensource.org/licenses/Apache-2.0)';
      break;
              case 'MIT License':
                licenseLink = '![License: MIT](https://opensource.org/licenses/MIT)';
      break;
                case 'Boost Software License 1.0':
                  licenseLink = '![License](https://www.boost.org/LICENSE_1_0.txt)';
      break;
                  case 'The Unlicense':
                    licenseLink = '![License: Unlicense](http://unlicense.org/)';
      break;
  
      case '':
        licenseLink = '';
        break;
  }
  return licenseLink;
  }
  
  
  //Function to generate the entire markdown page
function generateMarkdown(userInput, userInfo) {

  // Generate Table of Contents conditionally based on userInput
  let testTable = `## Table of Contents`;
  
  if (userInput.installation !== '') { testTable += `
  * [Installation](#installation)` };
  
  if (userInput.usage !== '') { testTable += `
  * [Usage](#usage)` };
  
  if (userInput.contributing !== '') { testTable += `
  * [Contributing](#contributing)` };
  
  if (userInput.tests !== '') { testTable += `
  * [Tests](#tests)` };
  
  
// Generate top part of the markdown
// Inputs user title, licensing, etc
let testMarkdown = 
  `# ${userInput.title}


  ${renderLicenseLink(userInput)}
  ${renderLicenseBadge(userInput)}

    
  ## Description 

  ${userInput.description}

  `
  
  // Adds Table of Contents to the drafted markdown
  testMarkdown += testTable;
   
  // Adds license section to drafted markdown
  testMarkdown += `
  * [License](#license)`;
    
  
  // Section on how to install
  if (userInput.installation !== '') {
    
  testMarkdown +=
  `
    
  ## Installation
    
  *How to install:*
    
  ${userInput.installation}`
  };
    
  
  // Section on how to use app
  if (userInput.usage !== '') {
    
  testMarkdown +=
    
  `
    
  ## Usage 
    
  *Instructions:*
    
  ${userInput.usage}`
  };
    
    
  // Section on how to contribute to the project
  if (userInput.contributing !== '') {
  
  testMarkdown +=
      
  `
    
  ## Contributing
    
  *No contrubutions are available at this time.*
    
  ${userInput.contributing}`
   };
    
  
  // Section on how to test the project
  if (userInput.tests !== '') {
    
  testMarkdown +=
  `
    
  ## Tests
    
  *How to run application/tests:*
    
  ${userInput.tests}`
  };
  
  
  // Section on licensing for the project
  testMarkdown +=
  `
    
  ## License
    
  ${userInput.license}
  `;
  
  
  // Section to ask questions to developer/Contact Info
  let draftDev = 
  `
  ---
    
  ## Questions?
  For any questions, please contact me:
   
  GitHub: [@${userInfo.login}](${userInfo.url})

  Email: ${userInfo.email}

  `
  
  testMarkdown += draftDev;
  
  // Return markdown
  return testMarkdown;
    
}
  
module.exports = generateMarkdown;
  