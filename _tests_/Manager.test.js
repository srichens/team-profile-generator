const Manager = require('../lib/Manager');

describe('Test for entire Manager class', () => {
    it('should have a office number property', () => {
        const officeNumberTest = 10;        
        const newManager = new Manager('', '', '', officeNumberTest );
        expect(newManager.officeNumber).toBe(officeNumberTest);
    });

    it('should give office number using getOfficeNumber method', () => {
        const officeNumberTest = 10;        
        const newManager = new Manager('', '', '', officeNumberTest);
        expect(newManager.getOfficeNumber()).toBe(officeNumberTest);
    });

    it('should return Manager with getRole method', () => {  
        const newManager = new Manager();
        expect(newManager.getRole()).toBe('Manager');
    });

}); 