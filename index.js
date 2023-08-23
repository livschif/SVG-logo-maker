// Inquirer import
const inquirer = require('inquirer');
// File system import
const fs = require('fs');
// Shape classes from ./lib directory
const { Triangle, Square, Circle } = require('./lib/shapes');

// writes svg file using user imputs 
function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === 'Triangle') {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === 'Square') {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += '</g>';
    svgString += '</svg>';

// using the fs module to generate the svg file
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log('Generated SVG your logo.');
  });
}

// function that uses inquirer to prompt the user questions in the command line

function promptUser() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What would you like to display in your logo? (Choose up to 3 letters)',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Choose a text color. (Enter a keyword or a hexadecimal number)',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape would you like to use for your logo?',
            choices: ['Triangle', 'Square', 'Circle'],
            name: 'shape',

        },
        {
            type: 'input',
            message: 'Choose a color for your shapes. (Enter a keyword or a hexadecimal number)',
            name: 'shapeColor',

        },
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log('Must enter a value no more than 3 characters');
            promptUser();
        } else {
            writeToFile('logo.svg', answers);
        }
    });
}

// calling promptUser function 
promptUser();
