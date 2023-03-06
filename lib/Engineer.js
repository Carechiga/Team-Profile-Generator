const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github){

    super(name, id, email)
    this.gituhb = github;
    }
    getGithub(){}
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;