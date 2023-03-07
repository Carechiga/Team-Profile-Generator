const fs = require("fs");
const inquirer = require("inquirer");
//had to install lopp functionality with inquirer using  "npm install --save inquirer-loop"
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

//this imports the project role classes
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

//this imports the html generation functionality
const {GenerateHtmlContent, ManagerInfoHTML, EngineerInfoHTML, InternInfoHTML} = require('./src/html-content');




inquirer.prompt([
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your project?",
    },
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
        name: "managerOfficeNumber",
        message: "What is the Manager's office number?",
    },
    {
        //this loop will generate an array of objects with the question names being the key value names
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
                //this question uses the when to determine whether or no the question should be asked, in this case only if the current member is an engineer
                type: "input",
                name: "github",
                message: "What is this employee's github username?",
                when: (employee) => employee.role === "Engineer",
            },
            {
                 //this question uses the when to determine whether or no the question should be asked, in this case only if the current member is an intern
                type: "input",
                name: "school",
                message: "What school did this employee attend?",
                when: (employee) => employee.role === "Intern",
            }
        ]
    }
])
.then((data => {
    console.log(data);
    const projectName = data.projectName;
    const manager = new Manager(data.managerName, data.Id, data.Email, data.managerOfficeNumber);
    const teamMembers = data.teamMembers;
    //need engineer and intern data to be sorted into arrays for use when generating HTML content
    const internArray =[];
    const engineerArray = [];
    
    //this for loop with parse the teamMembers array and split it into individual objects and use the correct parameters to define each
    for (let i = 0; i < teamMembers.length; i++){
        if(teamMembers[i].role === "Intern"){
            const intern = new Intern(teamMembers[i].roleName, teamMembers[i].roleId, teamMembers[i].roleEmail, teamMembers[i].school);
            internArray.push(intern);
        }
        else if(teamMembers[i].role === "Engineer"){
            const engineer= new Engineer(teamMembers[i].roleName, teamMembers[i].roleId, teamMembers[i].roleEmail, teamMembers[i].github);
            engineerArray.push(engineer);
        }
    }
    // console.log(manager);
    // console.log(internArray);
    // console.log(engineerArray);
    const managerHtml = ManagerInfoHTML(manager);
    const internHtml = InternInfoHTML(internArray);
    const engineerHtml = EngineerInfoHTML(engineerArray);
    const htmlFileContent = GenerateHtmlContent(projectName, managerHtml, engineerHtml, internHtml);

    //this writes the index.html file
    fs.writeFile('index.html', htmlFileContent, (err)=> 
    err ? console.error : console.log('Generating HTML'));
}))