const Manager = require('../lib/Manager');

describe('Manager', () => {
    const roomNumber = '50';
    const obj = new Manager('Name', 'ID', 'Eemail', roomNumber)
    it('Should return the room number as a string equal to the office room number given as a parameter', () => {
        const result = obj.getOffice();

        expect(result).toEqual(roomNumber);
    })
    it('Should return the role of Manager', () => {
        const result = obj.getRole();

        expect(result).toEqual('Manager');
    })
}) 