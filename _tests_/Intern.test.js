const Intern = require('../lib/Intern');

describe('Test for entire Intern class', () => {
    it('should have a school property', () => {
        const schoolTest = 'My College';        
        const newIntern = new Intern('', '', '', schoolTest);
        expect(newIntern.school).toBe(schoolTest);
    });

    it('should give school using getSchool method', () => {
        const schoolTest = 'My College';
        const newIntern = new Intern('', '', '', schoolTest);             
        expect(newIntern.getSchool()).toBe(schoolTest);
    });  

    it('should return Intern with getRole method', () => {  
        const newIntern = new Intern();
        expect(newIntern.getRole()).toBe('Intern');
    });

}); 