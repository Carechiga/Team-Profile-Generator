const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const userName = "githubUserName"
    const obj = new Engineer('Name', 'ID', 'Email', userName)
    it('Should return a github username equal to the the github parameter given', () => {
        const result = obj.getGithub();

        expect(result).toEqual(userName);
    })
    it('Should return the role of Engineer', () => {
        const result = obj.getRole();

        expect(result).toEqual('Engineer');
    })
})