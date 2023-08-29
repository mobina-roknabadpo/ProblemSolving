'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the '10timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here

    const hour = s.slice(0, 2);
    const timeFormat = s.slice(2, 8);
    const label = s.slice(8, 10);
    if (+hour === 12 && label === 'AM') {
        return("00" + timeFormat);
    }
    if (+hour === 12 && label === 'PM') {
        return(hour + timeFormat);
    }
    if (hour < 12 && label === 'PM') {
        return(12 + +hour + timeFormat);
    } else {
        if (hour < 10) {
            return("0" + +hour + timeFormat);
        }
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
