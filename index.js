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
    }
];   

startApp();

function startApp() {
    inquirer
        .prompt(managerQuestions)
        .then(console.log(answers)
        )
        // .then(askTeamQuestion()
        //  )
};

askTeamQuestion();

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

function askTeamQuestion() {
    inquirer
        .prompt(teamQuestion)
        .then(console.log(answers)
        )
        .then(evaluateTeamChoice(answers)        
        )
};

function evaluateTeamChoice(answers){
    if(answers === "Engineer"){
        engineerChoice();
    } else if(answers === "Intern"){
        internChoice();
    } else {
        console.log("Team built");
    }
};

function engineerChoice(){
    inquirer
        .prompt(engineerQuestions)
        .then(console.log(answers))
        .then(askTeamQuestion())
}

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
    }
];   

function internChoice(){
    inquirer
        .prompt(internQuestions)
        .then(console.log(answers))
        .then(askTeamQuestion())
}

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
    }
];   