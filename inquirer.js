const fs = require('fs');
const inquirer = require('inquirer');
const webpage = require('./utils/webpage');
const team = require('./team');

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's full name?", 
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
        name: 'id',
        message: "What is the employee's employee ID?", 
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
        message: "What the employee's email address?",
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
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
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

const roleQuestion = [
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
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

function startApp() {
    inquirer
        .prompt(employeeQuestions)             
        .then(function (response) {            
            if(response.role === 'Manager') {
                managerChoice();
            } else if(response.role === 'Engineer') {
                engineerChoice();
            } else if(response.role === 'Intern') {
                internChoice();
            } 
        });
};

startApp();

function role() {
    inquirer
        .prompt(roleQuestion)             
        .then(function (response) {            
            if(response.role === 'Manager') {
                managerChoice();
            } else if(response.role === 'Engineer') {
                engineerChoice();
            } else if(response.role === 'Intern') {
                internChoice();
            } 
        });
};

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
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

function managerChoice(){
    inquirer
        .prompt(managerQuestions)           
    //     .then(response => {
    //         return webpage(response);             
    //     })
    //    .then(webPageText => {
    //        return appendToFile(webPageText);            
    //    })     
       .then((response) => 
           response.add === 'Yes'
           ? role() 
           : console.log("Your team profile has been created")
       )          
};

const engineerQuestions = [
    {
        type: 'input',
        name: 'eGithub',
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

function engineerChoice(){
    inquirer
        .prompt(engineerQuestions)           
    //     .then(response => {
    //         return webpage(response);             
    //     })
    //    .then(webPageText => {
    //        return appendToFile(webPageText);            
    //    })     
       .then((response) => 
       response.add === 'Yes'
           ? role() 
           : console.log("Your team profile has been created")
       )          
};

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern study at?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a school');
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


function internChoice(){
    inquirer
        .prompt(internQuestions)                  
    //     .then(response => {
    //         return webpage(response);             
    //     })
    //    .then(webPageText => {
    //        return appendToFile(webPageText);            
    //    })     
       .then((response) => 
        response.add === 'Yes'
           ? role() 
           : console.log("Your team profile has been created")
       )          
};