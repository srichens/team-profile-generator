# Team Profile Generator


[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)


## Bootcamp Week 10 Challenge
This week's challenge was to write a Node.js command-line application to generate a HTML webpage with employee information for a software engineering company. The requirements were the following:

1. Use the Inquirer package.
2. Write unit tests, run them via Jest, and confirm they all pass.
3. Accept user input from the command line to gather employee information.
4. Start off getting team manager info, and then go through prompts to add engineers or interns until the team is complete.
5. Use an employee class with properties that each employee has in common, and then use specific classes (manager, engineer, and intern) to extend the employee class.
6. When the webpage is generated, ensure the email and Github links are clickable.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Process Highligts](#process-highlights)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation
This app requires Node.js, npm, Inquirer and Jest.

## Usage
See the video linked below that walks through the app's functionaility. To summarize:

1. The app starts with a welcome message that indicates a team manager must be added first.
2. The manager questions ask for name, employee id, email address, and office number.
3. The user is then asked if they would like to add an employee. If yes, they are asked what kind of employee; if no, the webpage generates with just the manager, and the app is exited.
4. If team members are being added, and the user chooses an engineer, they are asked for name, employee id, email address, and GitHub profile name.
5. If the user chooses to add an intern, they are asked for name, employee id, email address, and school.
6. Once a team member's questions are answered, the user is given the choice to add another team member. If yes, they are taken to the employee type question; if no, the webpage is generated.
7. The demo then runs the unit tests (using Jest). The tests show that the Employee class, and the classes that extend it (Manager, Engineer, Intern), have the properties specified, and that the methods within each class function how they're supposed to.

[Link to Team Profile Generator Demo Video](https://watch.screencastify.com/v/jnNQ8lVnp7A54nt7TnSU)

## Process Highlights
1. One of the first things I did (because it was the easiest) was to create an html template for the page that would be rendered. I used Tailwind, which I learned to use in Project I, so I did not need to use a separate CSS file. 
2. *Challenges:* On the javascript side, I started out writing some inquirer questions, and then very simple code to get the html render. But I hadn't added any formatting to the html at that point, so it seemed like it worked to append each employee card individually as it was created. However, once I added the html body and the styling, I realized that of course it would append the entire html page, not insert the card into the html. I spent a lot of time trying to make the individual rendering happen and finally gave up and pushed all the team members into an array. I did get it to work partially by initially creating the html file with just the manager, and then appending the employees that were then created, but that was all happening within one run of the app. I really wanted to be able to exit the app, and then add employees to an existing file. I did a lot of research and tried a lot of ideas, but in the end, my main takeway was that while I was using javascript in node, I ulimately couldn't use javascript to generate code to manipulate an existing DOM.
3. *Successes:* While I did push all the team members into one array, I did separate them out by role on the helper js, so that no matter what order you add employee types, the engineers will all be grouped together after the manager, and the interns will all be grouped together after the engineers.
4. I did not add the extra validation (not required) to the inquirer questions to make sure the right type of input is entered (number, etc.). I spent so much time learning about why I couldn't add team members to an existing HTML, that I ran out of steam.

## License
This product is licensed under ISC.

## Contributing
If you would like to contribute to this application, please refer to the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests
Use Jest for testing. Enter npm i in the terminal to install, and then npm run test to run tests.

## Questions
If you have any questions, please contact me at sarahgrichens@gmail.com or view my projects at https://github.com/srichens.