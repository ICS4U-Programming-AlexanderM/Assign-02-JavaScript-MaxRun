//  Created by Alexander Matheson
//  Created on 2023-Apr-04
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This program finds the max run of lines in a file.
const fs = require('fs');

// Function to determine the max run of a line.
function findMaxRun(line) {
    // Declare variables.
    let currentRun = 1;
    let maxRun = 0;

    // Check if the line holds only one character.
    if (line.length == 1) {
        maxRun = 1;
    }

    // Iterate through line and check if current character is equivalent
    // to the next one in the line.
    // For loop will not be executed if the line holds less than two
    // characters.
    for (let character = 0; character < line.length - 1; character++) {
        if (line[character] == line[character + 1]) {
            currentRun++;
        } else {
            currentRun = 1;
        }
        if (currentRun > maxRun) {
            maxRun = currentRun;
        }
    }
    return maxRun;
}

// Read the input file and create an array of each line.
const input = fs.readFileSync('input.txt', 'utf8');
const fileArr = input.split(/\r?\n/);

// Loop to send each line to function
let run = "";
for (const position of fileArr) {
    run = run + findMaxRun(position) + "\n";
}

// Write to the output file
fs.writeFileSync('output.txt', run);

// Write to the console
console.log(run);
