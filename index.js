const fs = require('fs');
const inquirer = require('inquirer');
const logic = require('./utils/logic');

const managerQuestions = [
    {
        type: 'input',
        name: 'fullname',
        message: "What is the team manager's full name?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the manager's employee ID?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: "What the manager's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }          
    },    
    {
        type: 'input',   
        name: 'office',
        message: "What is the manager's office number?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an office number');
                return false;
            }
        }        
    },   
    {
        type: 'list',
        name: 'add',
        message: 'Would you like to add a team member?',
        choices: ['Yes', 'No'],
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please choose one');
                return false;
            }
        }          
    }                   
];   

startApp();

function startApp() {
    inquirer
        .prompt(managerQuestions)       
        .then((response) =>
            response.add === 'Yes'
            ? addTeam()
            : console.log('Your team is built!'))
};

const teamQuestion = [
    {
        type: 'list',
        name: 'team',
        message: 'What team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Done building team'],
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please choose one');
                return false;
            }
        }          
    }
];

function addTeam() {
    inquirer
        .prompt(teamQuestion)     
        .then(function (response) {
            if(response.team === 'Engineer') {
                engineerChoice();
            } else if(response.team === 'Intern') {
                internChoice();
            } else {
                console.log('Your team is built!')
            }       
         }
        );
};

const engineerQuestions = [
    {
        type: 'input',
        name: 'fullname',
        message: "What is the engineer's full name?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the engineer's employee ID?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: "What the engineer's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }          
    },    
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a username');
                return false;
            }
        }        
    },
    {
        type: 'list',
        name: 'add',
        message: 'Would you like to add another team member?',
        choices: ['Yes', 'No'],
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please choose one');
                return false;
            }
        }          
    }                   
];   

const internQuestions = [
    {
        type: 'input',
        name: 'fullname',
        message: "What is the intern's full name?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a name');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the interns's employee ID?", 
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an ID');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'email',
        message: "What the intern's email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }          
    },    
    {
        type: 'input',
        name: 'github',
        message: "What is the intern's GitHub username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a username');
                return false;
            }
        }        
    },
    {
        type: 'list',
        name: 'add',
        message: 'Would you like to add another team member?',
        choices: ['Yes', 'No'],
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please choose one');
                return false;
            }
        }          
    }                   
];   

function engineerChoice(){
    inquirer
        .prompt(engineerQuestions)    
        .then((response) =>
            response.add === 'Yes'
            ? addTeam()
            : console.log('Your team is built!'))
}

function internChoice(){
    inquirer
        .prompt(internQuestions)        
            .then((response) =>
            response.add === 'Yes'
            ? addTeam()
            : console.log('Your team is built!'))
}