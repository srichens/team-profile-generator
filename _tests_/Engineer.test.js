const Engineer = require('../lib/Engineer');

describe('Test for entire Engineer class', () => {
    it('should have a github property', () => {
        const githubTest = 'github/srichens';        
        const newEngineer = new Engineer('', '', '', githubTest );
        expect(newEngineer.github).toBe(githubTest);
    });

    it('should give github using getGithub method', () => {
        const githubTest = 'github/srichens';        
        const newEngineer = new Engineer('', '', '', githubTest );
        expect(newEngineer.getGithub()).toBe(githubTest);
    });  

    it('should return Engineer with getRole method', () => {  
        const newEngineer = new Engineer();
        expect(newEngineer.getRole()).toBe('Engineer');
    });

}); 