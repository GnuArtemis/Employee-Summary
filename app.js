const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");
const { type } = require("os");

let employees;


// Code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!) Uses recursion to continue adding team members until "finish" is chosen.
function createTeam () {
    inquirer
        .prompt(
            {
                type: "list",
                name: "choice",
                message: "Please choose what type of employee you would like to add.",
                choices: ["Manager","Engineer","Intern","Finished"]
            }
        )
        .then(function(res){
            switch(res.choice) {
                case "Manager" :
                    console.log("Now creating a manager.")
                    createManager();
                    break;
                case "Engineer" :
                    console.log("Now creating an engineer.")
                    createEngineer();
                    break;
                case "Intern" :
                    console.log("Now creating an intern.")
                    createIntern();
                    break;
                default :
                    console.log("Now creating a web page with your employee summary.");
                    // createPage();
                    break;
            }
        })
}

//Adds a manager, using user input. 
function createManager() {
    const questions = [...standardQuestions];
    questions.push(specializedQuestions[0]);
    inquirer
        .prompt(questions)
        .then(function(res){
            const currManager = new Manager(res.name,res.id,res.email,res.office);
            employees.push(currManager);
            createTeam();
        })
}

//Adds an Engineer, using user input. 
function createEngineer() {
    const questions = [...standardQuestions];
    questions.push(specializedQuestions[1]);
    inquirer
        .prompt(questions)
        .then(function(res){
            const currEngineer = new Engineer(res.name,res.id,res.email,res.github);
            employees.push(currEngineer);
            createTeam();
        })
}

//Adds an Inttern, using user input. 
function createIntern() {
    const questions = [...standardQuestions];
    questions.push(specializedQuestions[2]);
    inquirer
        .prompt(questions)
        .then(function(res){
            const currIntern = new Intern(res.name,res.id,res.email,res.school);
            employees.push(currIntern);
            createTeam();
        })
}



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.



//Initializes the CLI program
function startBuildingPage () {
    employees = [];
    console.log("Welcome to the team summary building tool.")
    createTeam();
}

startBuildingPage();

//Questions to generate the information required for all employee types: name, ID, and email.
const standardQuestions = [
    {
        type: "input",
        message: "What is their name?",
        name: "name"
    },
    {
        type: "number",
        message: "What is their ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is their email address?",
        name: "email"
    }
];

//Questions to generate the information required only for one employee type: office number, github username, and school.
const specializedQuestions = [
    {
        type: "number",
        message: "What is your manager's office number?",
        name: "office"
    },
    {
        type: "number",
        message: "What is your engineer's github username?",
        name: "github"
    },
    {
        type: "number",
        message: "What is your intern's school?",
        name: "school"
    }
]