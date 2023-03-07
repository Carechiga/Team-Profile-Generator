const Intern = require('../lib/Intern');

describe('Intern', () => {
    const school ='School'
    const obj = new Intern('Name', 'ID', 'Email', school)
    it('Should return the school value entered as a parameter', () => {
        const result = obj.getSchool();

        expect(result).toEqual(school);
    })
    it('Should return the role of Intern', () => {
        const result = obj.getRole();

        expect(result).toEqual('Intern');
    })
})