const Employee = require('../lib/Employee');

describe('Employee', () => {
    const name = 'Joe';
    const id = '42';
    const email = 'email@email.com';
    const obj = new Employee(name, id , email);
    
    it('Should return the name string when given that parameter', () => {
        const obj1 = obj.getName();
                
        expect(obj1).toEqual(name);
    })
    it('Should return the id string when given that parameter', () => {
        const obj2 = obj.getId();
                
        expect(obj2).toEqual(id);
    })
    it('Should return the email string when given that parameter', () => {
        const obj3 = obj.getEmail();

        expect(obj3).toEqual(email);
    })

    it('Should return Employee', () =>
    {
        const result = obj.getRole();

        expect(result).toEqual('Employee');
    })
})