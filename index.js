const { default: inquirer } = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { default: ListPrompt } = require("inquirer/lib/prompts/list");

inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Who is Team Manager?",
    },
    {
        type: "input",
        name: "Id",
        message: "What is the Manager's ID number?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is the Manager's email address?",
    },
    {
        type: "input",
        name: "managerName",
        message: "What is the Manager's office number?",
    },
    {
        type: "loop",
        name: "teamMembers",
        message: "Would you like to add another member to the team?",
        questions:[
            {
                type: "list",
                name: "role",
                message: "What role are you adding to the team?",
                choices: ["Engineer", "Intern"],                
            },
            {
                type: "input",
                name: "roleName",
                message: "What is this team Member's name?"
            },
            {
                type: "input",
                name: "roleId",
                message: "What is this team Member's ID number?"
            },
            {
                type: "input",
                name: "roleEmail",
                message: "What is this team Member's email address?"
            },
            {
                type: "input",
                name: "github",
                message: "What is this employee's github username?",
                when: (employee) => employee.role === "Engineer",
            },
            {
                type: "input",
                name: "school",
                message: "What school did this employee attend?",
                when: (employee) => employee.role === "intern",
            }
        ]
    }
])
.then((data => {

}))