const fs = require ("fs");
const path = require ('path');
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type:'input',
        name:'title',
        message:'What is your project title?',
    },
    {
        type:'input',
        name:'description',
        message:'Provide a short description of your project?',
    },
    {
        type:'input',
        name:'github',
        message:'What is your Github user name?',
    },
    {
        type:'input',
        name:'test',
        message:'What are the testing parameters for your project?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?',
    },
    {
        type:'list',
        name:'license',
        message:'Which license do you wish to use with your project?',
        choices: ['Mit','Apache','None'],
    },
];

function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init(){
    inquirer.prompt(questions)
    .then((answers) =>{
        console.log(answers);
        writeToFile('myreadme.md',generateMarkdown({...answers}));
    })
}
init();