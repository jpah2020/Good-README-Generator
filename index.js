const fs = require('fs');
const inquirer = require('inquirer');
const util=require("util");
const writeFileAsync=util.promisify(fs.writeFile);

const userPrompt = async () => {
	const response = await inquirer.prompt([
		// array of questions for user
	{
		type: 'input',
		message: 'What is your github username?',
		name: 'username',
	},
	{
		type: 'input',
		message: 'What is your email address?',
		name: 'email',
	},
	{
		type: 'input',
		message: 'What is your project name?',
		name: 'projectName',
	},
	{
		type: 'input',
		message: 'please write a short description of your project',
		name: 'description',
	},
	{
		type: 'input',
		message: 'what kind of license should your project have?',
		name: 'license',
	},
	{
		type: 'input',
		message: 'What command should be install to run dependencies?',
		name: 'installationProcess',
	},
	{
		type: 'input',
		message: 'What command should be run to run test?',
		name: 'Tests',
	},
	{
		type: 'input',
		message: 'What does the user need to know about using the repo?',
		name: 'Information',
	},
	{
		type: 'input',
		message: 'What does the user need to know about contributing to the repo?',
		name: 'contributing',
	},
])

	const queryUrl = `https://api.github.com/users/${response.username}`


await writeFileAsync("./README.md",`
${response.projectName} 
![GitHub License]
(https:img.shields.io/badge/license-MIT-blue)

${response.description}

Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command node index.js The user will be prompted for their GitHub username

## Table of Contents
\n* [email](#Email)

\n* [Installation](#Installation)

\n* [Commands](#Commands)

\n* [Information](#Information)

\n* [Contributors](#Contributors)


## Email:  ${response.email}

## License:
This project is licensed under the ${response.license}  

## Installation
To install necessary dependencies, run the following command:
${response.installationProcess}
npm install

## Commands
${response.Tests}

## Information
${response.Information}

## Contributors
${response.contributing}

## Link To github page
${queryUrl}
`)


console.log(response)
}
try{
userPrompt()
}
catch(error){
    console.log("Invalid input",error)
}


