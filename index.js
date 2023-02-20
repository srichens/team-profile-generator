const fs = require('fs');
const inquirer = require('inquirer');
const webpage = require('./src/webpage');
const engineerCard = require('./src/engineer-card');
const internCard = require('./src/intern-card')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const team = [];

const startQuestion = [
    {
        type: 'list',
        name: 'welcome',
        message: "Welcome! Would you like to create a team profile?",
        choices: ['Yes', 'No - exit app'],
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

function startApp(){
    inquirer
    .prompt(startQuestion)    
    .then(response => response.welcome === 'Yes'
        ? mgrRole() 
        : console.log('Goodbye!')
    )          
};

startApp();

const mgrRoleQuestion = [
    {
        type: 'list',
        name: 'role',
        message: "Please start by adding a manager",
        choices: ['Ok', 'Exit'],
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

function mgrRole() {
    inquirer
        .prompt(mgrRoleQuestion)
        .then((response) => 
        response.role === 'Ok'
           ? managerChoice() 
           : console.log("Goodbye!")
       )                

}

function chooseRole() {
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
const roleQuestion = [
    {
        type: 'list',
        name: 'role',
        message: "What is the title of the employee you'd like to add?",
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

// function role() {
//     inquirer
//         .prompt(roleQuestion)             
//         .then(function (response) {            
//             if(response.role === 'Manager') {
//                 managerChoice();
//             } else if(response.role === 'Engineer') {
//                 engineerChoice();
//             } else if(response.role === 'Intern') {
//                 internChoice();
//             } 
//         });
// };



const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's full name?", 
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
        message: "What is the manager's email address?",
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
    }    
];

function appendToFile(data) {        
    fs.appendFile('./dist/index.html', data, (err) =>
    err ? console.log(err) : add())
};

function managerChoice(){
    inquirer
     .prompt(managerQuestions)
     .then(response => {
        const newEmployee = new Manager(response.name, response.id, response.email, response.officeNumber);  
        // console.log(newEmployee);  
        // return webpage(newEmployee); 
        return webpage(newEmployee);           
     })  
      .then(webPageText => {
        return appendToFile(webPageText);            
     })   
    //.then(add())   
   
};

const addQuestion = [
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

function add() {
    inquirer
     .prompt(addQuestion)
     .then((response) => 
       response.add === 'Yes'
           ? chooseRole() 
           : console.log("Your team profile has been created")
       )                
};

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
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
        name: 'id',
        message: "What is the engineers's employee ID?", 
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
        message: "What is the engineer's email address?",
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
        message: "What is the engineer's github profile?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a github profile');
                return false;
            }
        }        
    }    
];

function engineerChoice(){
    inquirer
     .prompt(engineerQuestions)
     .then(response => {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github);  
        // console.log(newEmployee);  
        // return webpage(newEmployee); 
        return engineerCard(newEngineer);           
     })  
      .then(engCard => {
        return appendToFile(engCard);            
     })   
    // .then(add())     
    
};

const internQuestions = [
    {
        type: 'input',
        name: 'name',
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
        name: 'id',
        message: "What is the intern's employee ID?", 
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
        message: "What is the intern's email address?",
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
        message: "Where does the intern go to school?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a school');
                return false;
            }
        }        
    }    
];

function internChoice(){
    inquirer
     .prompt(internQuestions)
     .then(response => {
        const newEmployee = new Intern(response.name, response.id, response.email, response.school);  
        // console.log(newEmployee);  
        // return webpage(newEmployee); 
        return webpage(newEmployee);           
     })  
      .then(webPageText => {
        return appendToFile(webPageText);            
     })   
    // .then(add())   
    
};