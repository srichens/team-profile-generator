const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
       
    };
    
    getRole();
};

const manager = new Manager();

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
       
    };

    getGithub();

    getRole();
};

const engineer = new Engineer();

class Intern extends Employee {
    constructor(school) {
        this.school = school;
       
    };
    
    getSchool();

    getRole();
};

const intern = new Intern();